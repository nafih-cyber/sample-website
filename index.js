

$(document).ready(function () {
    $(".mvpnav").click(function () {
        $(".mvplist").slideDown(2000);
    });
    $("#stop").click(function () {
        $(".mvplist").stop();
    });
    $("#im").click(function () {
        $("#im").hide(1000, function () {
            alert("you selected this movie")

        });
    })

    $("#mainh").css("color","#F2CF63").animate({fontSize: '3em'}, "slow");
});