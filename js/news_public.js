$(function(){
    /*banner轮播*/
    var $window = $(window),window_width = $window.width();
    $('#js_banner, #js_banner_img li').width(window_width);
    new $.Tab({
        target: $('#js_banner_img li'),
        effect: 'slide3d',
        animateTime: 1000,
        stay: 8000,
        autoPlay: true,
        merge: true,
    });
    //个人浮窗
    var w_height=window.innerHeight;
    var foot=$('.public_foot');
    var mascot=foot.find('.mascot');
    var public_foot=foot.offset().top;
    var foot_height=foot.height();
    var foot_top=$('#foot_top');
    $(document).on('scroll',function () {
        if(document.documentElement.scrollTop>=public_foot-w_height){
            foot_top.css({position:'absolute',bottom:foot_height+'px',background:'rgba(rgba(127,127,127,1))'})
        }else{
            foot_top.css({position:'fixed',bottom:0})
        }
    });
    mascot.on('mouseover',function () {
        $(this).css('animation','mascot_lr 1.5s ease infinite .2s both running');
    })
    mascot.on('mouseout',function () {
        $(this).css('animation','mascot 1.5s ease infinite .2s both running');
    })
})