//Hello jQueryを表示
//$(document).ready(function(){
//  $('body').html('<h1>Hello jQuery!!</h1>');
//});

//背景青色を表示
//$(function(){
//  $('.box1').css({
//    'background-color': '#0000FF',
//    'height': '100px'
//  });
//});

//アニメーション
//上から下にスライド
//$(function(){
//  $('.box1').slideDown();
//});

//したから上にスライド cssのdisplay: none;削除
//$(function(){
//  $('.box1').slideUp();
//});

//非表示の要素をjQueryで表示させる
//$(function(){
 //   $('.box1').show();
 //   $('.box1').css({'background-color': '#0000FF'});
//});

//一瞬だけ表示
//$(function(){
//    $('.box1').hide();
//});

//確認問題
//$(function(){
//    $('.box1').slideDown(function(){
 //       $('.box1').css({
 //           'background-color': '#0000FF',
 //           'width': '200px',
 //           'height': '100px'
 //       }).slideUp();
 //   });
//});

//マウスオーバー/マウスアウト
//$(function(){
//    $('.box1').mouseover(function(){
//        $('.box1').css({'background-color': '#0000FF'});
//    });
//     $('.box1').mouseout(function(){
//        $('.box1').css({'background-color': '#FF0000'});
//    });
//});

//class属性
//$(function(){
//   $('.box1').mouseover(function(){
//       $('.box1').addClass('box1-ext');
//   }) ;
//   $('.box1').mouseout(function(){
//       $('.box1').removeClass('box1-ext');
//   }) ;
//});

//マウスクリック
$(function(){
   $('.box1').on('click', function(){
       $('.box1').addClass('box1-ext');
   }) ;
   $('.box1').mouseout(function(){
       $('.box1').removeClass('box1-ext');
   }) ;
});