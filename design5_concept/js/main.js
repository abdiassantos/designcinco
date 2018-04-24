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
        gutter: ($('.dropdown-content').width()*1.68)/2.5 + 5,
        hover: true
    });
});
$('.aniview').AniView();
$('.projetos').slippry();