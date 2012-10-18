$(document).ready(function() {  
    $("#search_field").focus(function() {
        $(".search_result").slideDown();
        $(".block.search .box1 img").animate({
            height: '483px'
        })
    }) 
    /*$("#search_field").focusout(function() {
        var fieldValue = $("#search_field").val();
        if (fieldValue == "") {
            $(".search_result").slideUp();
            $(".block.search .box1 img").animate({
                height: '117px'
            })
        }
    })*/
    
    $(document).click(
        function(e){
            if ($(e.target).parents().filter('.block.search').length != 1) {
                $(".search_result").slideUp();
                $(".block.search .box1 img").animate({
                    height: '117px'
                })
            }
        }
    );
    
    $("#search_service a.type").toggle(function() {
       boxSlidingUp($(this));
       $(".result #search_depatment .scroll_box").animate({
           height: '243px'
       })
       $(".result #search_depatment .scroll").animate({
           height: '243px'
       })
    }, function(){
       boxSlidingDown($(this));
       $(".result #search_depatment .scroll_box").animate({
           height: '115px'
       })
       $(".result #search_depatment .scroll").animate({
           height: '115px'
       })
    })
    
    $("#search_depatment a.type").toggle(function() {
       boxSlidingUp($(this));
       $(".result #search_service .scroll_box").animate({
           height: '243px'
       })
       $(".result #search_service .scroll").animate({
           height: '243px'
       })
    }, function(){
        boxSlidingDown($(this));
        $(".result #search_service .scroll_box").animate({
           height: '115px'
       })
       $(".result #search_service .scroll").animate({
           height: '115px'
       })
    })
    
    function boxSlidingUp(i) {
        var thisParent = i.parent();
        var  scrollBar = thisParent.parent().children(".scroll");
        thisParent.next(".scroll_box").slideUp();
        scrollBar.slideUp(); 
    }
    function boxSlidingDown(i) {
        var  thisParent = i.parent();
        var  scrollBar = thisParent.parent().children(".scroll");
        thisParent.next(".scroll_box").slideDown();
        scrollBar.slideDown(); 
        
    }
})
$(window).bind('scroll',function(e){
    parallaxScroll();
});
 
function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('#parallax-bg1').css('top',(120-(scrolled*0.7))+'px');
    $('#parallax-bg2').css('top',(735-(scrolled*2.3))+'px');
}