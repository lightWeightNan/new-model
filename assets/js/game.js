/* *********
Author: Zhao
Time:20170523
*/

//微信分享
function shareWx(){
    wx.onMenuShareTimeline({
            title: my_title, // 分享标题
            link: my_link, // 分享链接
            imgUrl: my_imgurl, // 分享图标
            success: function () {},
            cancel: function () {}
        });
            //获取“分享给朋友”按钮点击状态及自定义分享内容接口
        wx.onMenuShareAppMessage({
            title: my_title, // 分享标题
            desc: my_desc, // 分享描述
            link: my_link, // 分享链接
            imgUrl: my_imgurl, // 分享图标
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function () {},
            cancel: function () {}
        });
}

//***************************图片预加载*********************************//
function loading(percent) {
    percent = (percent);
    var loadingColorBg=document.getElementById('loadPer');
    loadingColorBg.innerHTML="Loading..."+percent+"%";
}
function loadingEffect() {
    var le = function () {
        if (currentPercent <= loadPercent) {
            preloadImages();
            loading(currentPercent);
            currentPercent++;
        }
        if (currentPercent > 100) {
            clearInterval(intervalId);
            //音乐调用
            // playbksound();
            document.getElementById('loading').style.display = "none";
            $(".container1").removeClass("hide");
        }
    }
    intervalId = setInterval(le, 20);
}
function preloadImages() {
    if (imgsrc.length <= 0) {
    } else {
        var res = imgsrc[0];
        imgsrc.splice(0, 1);
        var Img = new Image();
        Img.src = res.src;
        Img.onload = function () {
            loadPercent = res.per;
        }
        Img.onerror = function () {
            loadPercent = res.per;
        }
    }
}
var intervalId = false;
var loadPercent = 0;
var currentPercent = 0;
var imgsrc = [
    {src: "assets/images/logo.png", id: "", per: "1"},
];

//***************************音乐播放*********************************//
var gSound = 'assets/music/lg.mp3';window.isPlayMusic = true;
function switchsound() {
    //var au = $('audio'),
    var au = document.getElementById('bgsound');
    ai = document.getElementById('sound_image');

    if(isPlayMusic){
        au.pause();
        ai.src = "assets/images/music-stop.png";
    }else{
        au.play();
        ai.src = "assets/images/music-play.png";
    }
    isPlayMusic = !isPlayMusic;
}

function playbksound() {
    var audiocontainer = document.getElementById('audiocontainer');
    audiocontainer.innerHTML = '<audio id="bgsound" autoplay="autoplay"> <source src="' + gSound + '" /> </audio>';
    var audio = document.getElementById('bgsound');
    audio.play();
    audio.addEventListener('ended', function(){
        audio.play();
    }, false);
    sound_div = document.createElement("div");
    sound_div.setAttribute("ID", "cardsound");
    sound_div.style.cssText = "position: absolute;right: 3%;top: 2%;width: 7%;z-index: 5000;background: none;";
    box_htm = "<div id='note_box' style='height:100px;width:44px;position:absolute;left:-20px;top:-80px'></div>";
    bg_htm = "<img id='sound_image' src='assets/images/music-play.png'>";
    txt_htm = "<div id='music_txt' style='color:white;position:absolute;left:-40px;top:30px;width:60px'></div>"
    sound_div.innerHTML = bg_htm;
    document.body.appendChild(sound_div);
    $("#cardsound").on("touchstart", function () {
        switchsound();
    });
}

//开始加载
// loadingEffect();


//背景音乐调用
// playbksound();

 //微信分享调用
 var my_title="share title",  //设置分享标题
    my_link="share linkl",         //分享出去的链接地址
    my_imgurl="www.baidu.com/share.jpg",  //分享头图的图片
    my_desc="share text";  // 分享的文案
 // wx.ready(shareWx);m

//***************************游戏逻辑*********************************//
(function($){
    //your js here
 n
}(Zepto));
