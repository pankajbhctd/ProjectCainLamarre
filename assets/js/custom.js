function searhBox() {
    if($(window).width() < 768) {
        $('.searchField').css('display','none')
        $('.searchToggle').removeClass('expanded')
        $('.searchToggle').click(function(){
            $('.searchField').slideToggle(300);
            $('.navbar-collapse').removeClass('show');
            $(this).toggleClass('expanded')
        })
    }
    $('.navbar-toggler').click(function(){
        $('.searchField').css('display','none')
    })
}
$(document).ready(function(){
    // Collapse Bootstrap Hamburger Menu On Link Click
    $('.navbar-toggler').on('click', function () {
        $('.animatedIcon').toggleClass('open');
        $('body').toggleClass('viewportCondenced');
        if($('.navbar-nav > li > ul > li > a').hasClass('.active')) {
            $(this).parents('li').addClass('highLighted')
        }
    });
    $('.navbar-nav >li >a').on('click', function(){
        $('.animatedIcon').removeClass('open');
    });
    $('.navbar-nav > li > ul > li > a').hover(function(){
        $(this).parent('li').parents('li').toggleClass('highLighted')
    })
    $('.navbar-nav > li').each(function(){
        if($(this).find('a.active').length) {
            $(this).addClass('current');
        }
    })
    $('.readMore').click(function(){
        $(this).hide(100);
        $(this).next('.collapsedContent').fadeIn(100);
    })
})
$(window).on('load resize', function(){
    searhBox()
})