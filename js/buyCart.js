$(function(){

    $(".conditionScreen").on("click","li",function(){
        var $this = $(this);
        var flag = true ;
        if($this.hasClass("select-brand")){
            // 不限品牌选择box显示，其他隐藏
            $(".unlimited-brand").toggle();
            $(".unlimited-price").hide();
            $(".unlimited-firstpay").hide();
            $(".unlimited-month").hide();
            // 上下箭头指向
            if($(".unlimited-brand").is(":visible")){
                $(".select-brand i").removeClass("mui-icon mui-icon-arrowdown").addClass("mui-icon mui-icon-arrowup");
            }else {
                $(".select-brand i").removeClass("mui-icon mui-icon-arrowup").addClass("mui-icon mui-icon-arrowdown");
            }
        }else if($this.hasClass("select-price")){
            // 不限车价选择box显示，其他隐藏
            $(".unlimited-brand").hide();
            $(".unlimited-price").toggle();
            $(".unlimited-firstpay").hide();
            $(".unlimited-month").hide();
            // 上下箭头指向
            if($(".unlimited-price").is(":visible")){
                $(".select-price i").removeClass("mui-icon mui-icon-arrowdown").addClass("mui-icon mui-icon-arrowup");
            }else {
                $(".select-price i").removeClass("mui-icon mui-icon-arrowup").addClass("mui-icon mui-icon-arrowdown");
            }
        } else if($this.hasClass("select-pay")){
            // 不限首付选择box显示，其他隐藏
            $(".unlimited-brand").hide();
            $(".unlimited-price").hide();
            $(".unlimited-firstpay").toggle();
            $(".unlimited-month").hide();
            // 上下箭头指向
            if($(".unlimited-firstpay").is(":visible")){
                $(".select-pay i").removeClass("mui-icon mui-icon-arrowdown").addClass("mui-icon mui-icon-arrowup");
            }else {
                $(".select-pay i").removeClass("mui-icon mui-icon-arrowup").addClass("mui-icon mui-icon-arrowdown");
            }
        } else if($this.hasClass("select-month")){
            // 不限月供选择box显示，其他隐藏
            $(".unlimited-brand").hide();
            $(".unlimited-price").hide();
            $(".unlimited-firstpay").hide();
            $(".unlimited-month").toggle();
            // 上下箭头指向
            if($(".unlimited-month").is(":visible")){
                $(".select-month i").removeClass("mui-icon mui-icon-arrowdown").addClass("mui-icon mui-icon-arrowup");
            }else {
                $(".select-month i").removeClass("mui-icon mui-icon-arrowup").addClass("mui-icon mui-icon-arrowdown");
            }
        } 

        if($(".unlimited-brand").is(":visible") || $(".unlimited-price").is(":visible") || $(".unlimited-firstpay").is(":visible") || $(".unlimited-month").is(":visible") ){
            // 遮罩层显示
            $(".mark").show();
        }else {
            $(".mark").hide();
        }
    });
})