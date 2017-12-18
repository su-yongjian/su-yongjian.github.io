/*关闭分享*/
function clockShare() {
	$("#shareMask").fadeOut();
    $("#share").animate({"bottom": "-100%"});
    $("#share").delay(500).hide();
}

$(function() {
	// 分享打开
	$("#openShare").click(function() {
        $("#share").show();
		$("#shareMask").fadeIn();
		$("#share").animate({"bottom": "-10%"});
	});
	/*分享关闭*/
	$("#shareMask, #closeBack").click(function() {
		clockShare();
	});

});