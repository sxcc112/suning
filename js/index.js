$(function() {
    goodsShow();
    goodsClassify();
});
// 商品导航栏显示与隐藏
function goodsShow() {
    $(".nav_l").on("mouseover", function() {
        $(".mainnav_t_l").show();
    });
    $(".mainnav_t_l").on("mouseleave ", function() {
        $(".mainnav_t_l").hide();
    });
}
// 商品分类的显示与隐藏
function goodsClassify() {
    var flag = true;
    $(".all-opt-btn").on("click", function() {
        if (flag) {
            $(".all-opt-btn i").css("transform", "rotate(180deg)");
            $("#search-opt").hide(100);
            flag = false;
        } else {
            $(".all-opt-btn i").css("transform", "rotate(0deg)");
            $("#search-opt").show(100);
            flag = true;
        }
    })
}