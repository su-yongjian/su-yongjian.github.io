var swiper = new Swiper('.cartDetails-swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// 立即预约弹窗
function immediatelyAppointment(){
  $("#immediatelyAppointment").modal();
}
