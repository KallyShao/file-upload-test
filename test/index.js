/*
* @Author: Administrator
* @Date:   2018-01-06 14:56:48
* @Last Modified by:   Administrator
* @Last Modified time: 2018-01-06 22:56:42
*/
$(function(){
  $('.seller-checked').click(function(){
    var sellerId = [];
      $('.sub-tab').each(function(){
        if($(this).find('.seller-checked').is(':checked')){
            sellerId.push($(this).data('seller-id'));
        }
        //这两个设置项必填
      })
       console.log(sellerId);
  })  
})
