document.onreadystatechange = function () {
    var state = document.readyState;
    if (state == 'interactive') {
        document.getElementById('contents').style.visibility="hidden";
    } else if (state == 'complete') {
        setTimeout(function(){
            document.getElementById('interactive');
            document.getElementById('load').style.visibility="hidden";
            document.getElementById('contents').style.visibility="visible";
        },1000);
    }
}
$(document).ready(function(){

    var app = new Vue({
        el: '#app',
        data: data["1"]
    });
    var owl = $(".owl-carousel").owlCarousel({
        items:1,
        loop:false,
        center:true,
        margin:10,
        URLhashListener:true,
        startPosition: 'URLHash',
        nav: true,
        dots: true,
        autoHeight:true,
        navContainer: ".carousel-nav",
        dotsContainer: ".carousel-dots"
    });
    setTimeout(function () {
            owl.trigger('refresh.owl.carousel');

    }, 3000);
    // embedly('on', 'card.rendered', function(iframe){
    //     owl.trigger('refresh.owl.carousel');
    // });
});
