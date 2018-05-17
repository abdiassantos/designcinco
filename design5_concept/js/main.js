$(document).ready(function(){
    $('.button-collapse').sideNav();
    $('.materialboxed').materialbox();
    $('.slider').slider();
    $('.modal').modal();
    $('.dropdown').dropdown({
        belowOrigin: true,
        hover: true
    });
    $('.dropdownnext').dropdown({
        gutter: ($('.dropdown-content').width()*1.43)/2.5 + 5,
        hover: true
    });
    $('.dropdownnext1').dropdown({
        gutter: ($('.dropdown-content').width()*1.43)/2.5 + 6,
        hover: true
    });
});
$('.aniview').AniView();
$('.projetos').slippry();