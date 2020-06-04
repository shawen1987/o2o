

var helper3D;
var load3DStart;
var renderT;


function loadNew3DDisplay() {

    helper3D = ThreeDDisplayHelper.init("canvasXXX", 720, 800, iImgCount, aImg[0]);
    helper3D.bindEvents();
    helper3D.clearCache();
    helper3D.cacheFrames();

}

function roundZ(num){
    // hack code, 可能减少不了多少延迟
    // var org = num;
    // num = (0.5 + num) | 0;
    // num = ~~ (0.5 + num);
    // num = (0.5 + num) << 0;
    // console.log("org:" + org + " rounded:" + num);
    // return num;
    return Math.round(num);
}



function displayRenderPercentage() {
	var prefix = "渲染中...";
    $('#loadRate').text(prefix + ((loadRateR / imageTotalSize) * 100).toFixed(2) + "%");
    console.log(prefix + ((loadRateR / imageTotalSize) * 100).toFixed(2) + "%");
    if (loadRateR < imageTotalSize) {
        //$('#loadRate').show();
        return;
    } else {
        clearInterval(iRCount);
        clearInterval(renderT);
        $('#loadRate').hide();
        $('#images').hide();
       // console.info("Load completed, cost " + (new Date() - load3DStart));
        helper3D.loadShadowFrame(iImgCount-1);
        canvas3DRefresh = false;
        if (showCase) {
            rollCanvas3D();
        }
    }
}


function rollCanvas3D()
{
    var last = 0;
    var now = 0;
    var max = 999999;
    
    clearInterval(autoRollTimer);
    autoRollTimer=setInterval(function () {
        helper3D.loadShadowFrame(now);
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



function loadImg(o) {
    //var img = new Image();
    //img.src = o.src;
    //var start = new Date();
    o.context.drawImage(o.img,o.sx,o.sy,o.sw,o.sh,o.dx,o.dy,o.dw,o.dh);
    //console.info("Load img cost " + (new Date() - start));
    loadRateR++;
    // console.debug("inner draw: "+ " context:" + o.context.id + " "+ o.src + " " +
    //  o.sx + " " +  o.sy + " " + o.sw + " " +  o.sh + " "+ 
    //  o.dx + " " +  o.dy + " " + o.dw + " " +  o.dh + " ")
};

DrawInfo = {
    createNew:function() {
        return {context:null,img:null,src:'',sx:0,sy:0,sw:0,sh:0,dx:0,dy:0,dw:0,dh:0};
    }
}

var oList = [];


ThreeDDisplay = {
    _width : 375,
    _height : 482,
    // 测试image为400*400 情况 :》375*422 120%* 400=480=》 左右切掉20% = 
        
    //     sx：图像上的x坐标
    //     sy：图像上的y坐标
    //     sw：矩形区域的宽度
    //     sh：矩形区域的高度
    //     dx：画在canvas的x坐标
    //     dy：画在canvas的y坐标
    //     dw：画出来的宽度
    //     dh：画出来的高度
    sx : 400 * 0.1, // left 10% width cliped
    sy : 400 * 0.05,  // top 5% height clipped,
    sw : 400 * 0.8,  // width is 80%
    sd : 400 * 0.9,  // height is 90%
    dx : 0,
    dy : 0,
    dw : 375,
    dh : 482,
    canvas : null,
    context : null,

    init : function(canvas, width, ratio, imgWidth, imgHeight, sx, sy, sw, sh) {
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
        this._width = width;
        this._height = roundZ(width/ratio);
        this.sx = sx;
        this.sy = sy;
        this.sw = sw;
        this.sh = sh;
        this.dw = this._width;
        this.dh = this._height;

        return this;
    },

    drawImages : function (images,canvasIndex) {
        
        this.context.clearRect(0,0,this._width,this._height);
        //this.context.save();
        var info;
        for(var key in images) {
            try{
                info = DrawInfo.createNew();
                info.sx = this.sx;
                info.sy = this.sy;
                info.sw = this.sw;
                info.sh = this.sh;
                info.dx = this.dx;
                info.dy = this.dy;
                info.dw = this.dw;
                info.dh = this.dh;
                info.img = images[key];
                //info.src = images[key].src;
                info.context = this.context;
                oList.push(info);
            }catch(e){
                console.error(e);
            }
        }
        //this.context.restore();
    },
    setCanvas:function(canvas){
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
    }
}

/**
 * 每一个具体实现对应一个helper， canvas的对应这个helper
 */
ThreeDDisplayHelper = {
    SCALE:16,
    _display: null,
    _canvas: null, 
    _context:null,
    _ratio : 8/9,
    _images : [],
    _startX : 0,
    eventHolder : null,
    index : 0,
    lastIndex : 0,
    _frameCount :0,
    _canvasCaches:[],

    init : function (canvasName, displayWidth, imgWidth, frameCount, images) {
        this._canvas = document.getElementById(canvasName);
        this._context = this._canvas.getContext("2d");
        if (!this._canvas | !this._context) {
            console.error("Canvas " + canvasName +" not found or not supported")
            return ;
        }

        this._images  = images;
        var widthD = 0.06;
        var heightD = 0.0;
        this._ratio = (1-widthD*2)/(1-heightD*2);

        var sx = roundZ(imgWidth * widthD); // left 10% width cliped
        var sy = roundZ(imgWidth * heightD);  // top 5% height clipped;
        var sw = roundZ(imgWidth * (1-widthD*2));  // width is 80%
        var sh = roundZ(imgWidth * (1-heightD*2));  // height is 90%
        this._canvas.width = displayWidth;
        this._canvas.height = this._canvas.width / this._ratio;

        this._display = ThreeDDisplay.init(this._canvas, this._canvas.width, this._ratio, imgWidth, imgWidth, sx, sy, sw, sh);

        this.eventHolder = this._canvas;
        this.lastIndex = this.index;
        this._frameCount = frameCount;
        return this;
    },

    bindEvents : function(){
        this.eventHolder.addEventListener( "touchstart" , function (e) {
            e = e || event;
            ThreeDDisplayHelper._startX = e.clientX || e.touches[0].clientX;
            ThreeDDisplayHelper.eventHolder.addEventListener( "touchmove" , ThreeDDisplayHelper.onMove, false);
            ThreeDDisplayHelper.eventHolder.addEventListener( "touchend" , ThreeDDisplayHelper.onUp, false);
            return false;
        }, false);
    },

    onMove : function (e) {
        
        clearInterval(autoRollTimer);
        
        e = e || event;
        var cx = e.clientX || e.touches[0].clientX;
        var frameCount = ThreeDDisplayHelper._frameCount;
        var midIndex = ThreeDDisplayHelper.lastIndex - Math.round((cx-ThreeDDisplayHelper._startX)/ThreeDDisplayHelper.SCALE) ;
        midIndex = midIndex % frameCount
        if (midIndex < 0) {
            midIndex += frameCount;
        }
        if (ThreeDDisplayHelper.index != midIndex) {
            ThreeDDisplayHelper.index = midIndex;
            //console.log("index is " + ThreeDDisplayHelper.index);
            ThreeDDisplayHelper.loadShadowFrame(midIndex);
            //this._display.drawImages(ThreeDDisplayHelper.images[ThreeDDisplayHelper.index]);
        }
        return false;
    },
    onUp : function (e) {
        ThreeDDisplayHelper.eventHolder.removeEventListener( "touchmove" , ThreeDDisplayHelper.onMove, false);
        ThreeDDisplayHelper.eventHolder.removeEventListener( "touchend" , ThreeDDisplayHelper.onUp, false);
        if (body.releaseCapture) body.releaseCapture();
        ThreeDDisplayHelper.lastIndex = ThreeDDisplayHelper.index;
    }
    , showFrame: function(frameIndex){
        var selectedImages = [];
        if (frameIndex < 0 || frameIndex >= this._images[0].length)
            frameIndex = 0;

        for(var i = 0; i < this._images.length; i++) {
            selectedImages.push(this._images[i][frameIndex]); 
        }
        var can=this._canvasCaches[frameIndex];
        if (!can){
            can = document.createElement("canvas");
            can.width = this._canvas.width;   
            can.height = this._canvas.height;
            this._canvasCaches[frameIndex] = can; 
            this._display.setCanvas(can);
            this._display.drawImages(selectedImages);
        } 
        this._context.clearRect(0,0,this._canvas.width,this._canvas.height);
        this._context.drawImage(can, 0, 0);
    }, 
    loadShadowFrame: function(frameIndex){
        if (frameIndex < 0 || frameIndex >= this._images[0].length)
            frameIndex = 0;

        var can=this._canvasCaches[frameIndex];
        if (!can){
            can = document.createElement("canvas");
            can.width = this._canvas.width;   
            can.height = this._canvas.height;
            this._canvasCaches[frameIndex] = can; 
            this._display.setCanvas(can);
            
            var selectedImages = [];
            for(var i = 0; i < this._images.length; i++) {
                selectedImages.push(this._images[i][frameIndex]); 
            }
            this._display.drawImages(selectedImages);
        }
        this._context.clearRect(0,0,this._canvas.width,this._canvas.height);
        this._context.drawImage(can, 0, 0);
    }, 
    clearCache : function(){
        this._canvasCaches = [];
    },
    cacheFrames : function(){
        var begin = new Date();
        //console.info("start to cache frames"+ begin);
        var start;
        var end;
        //for(var i=0 ; i < this._frameCount ; i ++) {
        // Create all Shadow Canvas first.
        var can = null;
        
        // $("#testd").html('');  
        for(var i=0 ; i < this._frameCount; i ++) {
            var can=this._canvasCaches[i];
            if (!can){
                can = document.createElement("canvas");
                can.width = this._canvas.width;   
                can.height = this._canvas.height;
                can.id="can_"+i;
                this._canvasCaches[i] = can; 
                can.getContext("2d").id="ctx_"+i;
                can.style="border:solid 1px red;";
                // $("#testd").append(can);
            } 
        }
        for(var i=0 ; i < this._frameCount; i ++) {
            this._display.setCanvas(this._canvasCaches[i]);
            var selectedImages = [];
            // start = new Date();
            for(var j = 0; j < this._images.length; j++) {
                selectedImages.push(this._images[j][i]); 
                //console.debug("pushed image url is: " + this._images[j][i].src);
            }
            // end = new Date();
            //console.info("["+ i+"] filter out images["+selectedImages.length+ "] cost: " + (end - start));
            var display = this._display;
            //setTimeout(function() {
                display.drawImages(selectedImages, i);
            //}, 10);
            // start = new Date();
            //console.info("["+ i+"] drawImages cost: " + (start - end));
        }
        renderT = setInterval(render,0);
    }
}

function render(){
    //var start = new Date();
    if (oList.length>0){
        loadImg(oList.shift());
    }
    // console.info("render cost: " + (new Date() - start))
    // start = new Date();
    // if (oList.length>0){
    //     var info = oList.shift();
    //     loadImg(info);
    // }
    // console.info("render cost: " + (new Date() - start))
    // start = new Date();
    // if (oList.length>0){
    //     var info = oList.shift();
    //     loadImg(info);
    // }
    // console.info("render cost: " + (new Date() - start))
    // start = new Date();
}



var sizeSet = false;
var imgWidth = 800;
var imgHeight = 800;

function createFilmImage() {

    if (!sizeSet) {
    var pic = $('[class="container3DModel"] #images .img img')[0];
        if (pic.naturalWidth)
            imgWidth = pic.naturalWidth;
        else 
            imgWidth = pic.width;
        if (pic.naturalHeight)
            imgHeight = pic.naturalHeight;
        else 
            imgHeight = pic.height;

        sizeSet = true;
    }


    var canvas = document.getElementById("canvasXXX");
    var context2D = canvas.getContext("2d");

    var imgsArray = aImg[0];
    var length = imgsArray.length;
    var frame = 0;
    var pics;
    for (var i = 0; i < length; i++) {
        pics = imgsArray[i];

        if (frame == 0) {
            frame = pics.length;
        }
        if (canvas.width < imgWidth * frame) {
            canvas.width = imgWidth * frame;
            canvas.height = imgWidth;
        }
        for (var j = 0; j < pics.length; j++) {
            context2D.drawImage(pics[j], imgWidth * j, 0);
        }
    }
    initFilmEvents(canvas, imgWidth);
}


function initFilmEvents(canvas, imgWidth) {
    canvas.style.position="relative";
    canvas.style.left = 0+"px";

    var body=document.body;
    var num=0;
	var midNum = 0;
	var lastNum = 0;

    var oEvent;
    var startX;
    var widthX=imgWidth;

    $("#rollMeTest").on('mousedown',function (ev){
    //$(canvas).on('mousedown',function (ev){
		oEvent=ev||event;
		startX=oEvent.clientX;
        if (canvas.scrollHeight) {
            widthX = canvas.scrollHeight;
            console.log("canvas scrollHeight"+ canvas.scrollHeight);
        }
		if(body.setCapture) {
			body.onmousemove=onMove;
			body.onmouseup=onUp;

			body.setCapture();
		} else{
			document.onmousemove=onMove;
			document.onmouseup=onUp;
		}
        canvas.style.cursor = "-webkit-grabbing";
	});

    function onMove(ev)
    {
        oEvent=ev||event;
        num = lastNum + Math.round((oEvent.clientX-startX)/SCALE);
        console.log(" " + num +" "+ lastNum +" "+ oEvent.clientX +" "+ startX +" "+ SCALE);
        if (num < 0) {
            num = - (Math.abs(num) % iImgCount);
        } else if (num > 0) {
            num = (num % iImgCount);
            if (num > 0)
                num -= iImgCount;
        }


        canvas.style.left = num * widthX +"px";
        if (num != midNum) {
            midNum = nul;
            console.log("num is " + num);
        }

        return false;
    }
 
    function onUp()
    {
        this.onmousemove=null;
        this.onmouseup=null;
        if(body.releaseCapture) body.releaseCapture();
        midNum = num;
        lastNum = num;
        
        canvas.style.cursor = "-webkit-grab";
    }

    
    
	var banner = document.getElementById("rollMeTest");
    banner.addEventListener( "touchstart" , function (e) {
        var onMove = function (e) {
            e = e || event;
            var cx = e.clientX || e.touches[0].clientX;
            num = lastNum + Math.round((cx-startX)/SCALE);
            if (num < 0) {
                num = - (Math.abs(num) % iImgCount);
            } else if (num > 0) {
                num = (num % iImgCount);
                if (num > 0)
                    num -= iImgCount;
            }
            canvas.style.left = num * widthX +"px";
            if (num != midNum) {
                midNum = num;
                console.log("num is " + num);
            }
            return false;
        };
        var onUp = function (e) {
            banner.removeEventListener( "touchmove" , onMove, false);
            banner.removeEventListener( "touchend" , onUp, false);
            if (body.releaseCapture) body.releaseCapture();
            lastNum = num;
            midNum = num;
        };

        e = e || event;
        startX = e.clientX || e.touches[0].clientX;
        if (canvas.scrollHeight) {
            widthX = canvas.scrollHeight;
            console.log("canvas scrollHeight"+ canvas.scrollHeight);
        }
        banner.addEventListener( "touchmove" , onMove, false);
        banner.addEventListener( "touchend" , onUp, false);

        return false;
	}, false);

}

function ShowInCanvas() {  
    var canvas =document.getElementById("canvasXXX");  
    var context2D =canvas.getContext("2d");  
    var imgs = $("#images img");
    
    var sizeSet = false;
    var pic;
    for (var i = 0; i < imgs.length; i++) {
        pic = imgs[i];

        if (!sizeSet) {
            if (pic.naturalWidth)
                canvas.width = pic.naturalWidth;
            else 
                canvas.width = pic.width;
            if (pic.naturalHeight)
                canvas.height = pic.naturalHeight;
            else 
                canvas.height = pic.height;

            sizeSet = true;
        }

        context2D.drawImage(pic, 0, 0);  
    }  
}  