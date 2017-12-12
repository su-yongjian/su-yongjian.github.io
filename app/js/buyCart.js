// $(function(){

//     $(".conditionScreen").on("click","li",function(){
//         var $this = $(this);
// // 点击当前li的时候，判断当前的是否有select-brand属性 ，  不限品牌div显示，遮罩层显示，其他不限项隐藏，同时当前li的兄弟元素的i标签的上标头都变为下标头。
// // 遮罩层只要是有上标头都显示
       
//         // 不限品牌
//         if($this.hasClass("select-brand")) {
//             $(".unlimited-brand").toggle();
//             $(".unlimited-price").hide();
//             $(".unlimited-firstpay").hide();
//             $(".unlimited-month").hide();
//             if($(".unlimited-brand").is(":visible")){
//                 $this.find("i").removeClass("mui-icon mui-icon-arrowdown").addClass("mui-icon mui-icon-arrowup")
//             }else {
//                 $this.find("i").removeClass("mui-icon mui-icon-arrowup").addClass("mui-icon mui-icon-arrowdown")
//             }   
            
//             // 不限车价
//         }else if($this.hasClass("select-price")) {
//             $(".unlimited-price").toggle();
//             $(".unlimited-brand").hide();
//             $(".unlimited-firstpay").hide();
//             $(".unlimited-month").hide();

//             // 不限首付
//         }else if($this.hasClass("select-pay")) {
//             $(".unlimited-firstpay").toggle();
//             $(".unlimited-brand").hide();
//             $(".unlimited-price").hide();
//             $(".unlimited-month").hide();

            
//             // 不限月供
//         }else if($this.hasClass("select-month")) {
//             $(".unlimited-month").toggle();
//             $(".unlimited-brand").hide();
//             $(".unlimited-price").hide();
//             $(".unlimited-firstpay").hide();

//         }
//     });
// })