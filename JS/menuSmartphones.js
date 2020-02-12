function hideAfterClick() {
    $('nav ol li ol li').click(function () {
        $('nav ol li ol').hide();
    });
}
function showAfterHover() {
    $('nav ol li i').hover(function () {
        $('nav ol li ol').show();
    });
}
function hideAfterMouseleave() {
    $('nav ol li ol').mouseleave(function () {
        $('nav ol li ol').hide();
    });
}
//function hideMenuAfterClick() {
//    $('hideMenu').click(function () {
//        $('nav ol li ol').hide();
//    });
//}