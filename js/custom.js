// Hero slider Start
$('.myslider').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1500,
  speed: 500,
  slidesToShow: 1,
  adaptiveHeight: true,

});
// Hero slider end



$(document).ready(function () {
  // Bottom to top scroll btn animation
  var scrBtn = $('.scroll-top-btn');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
      scrBtn.addClass('show');
    }
    else {
      scrBtn.removeClass('show');
    }
  });
  scrBtn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 1000)
  });


  // When click on Events Cards Like and Deslike heart color change and Wishlist Count Increase and Descrease.
  var likeCount = 0;
  $('.card-events .card .like-cir').click(function () {

    $(this).toggleClass('like');

    if ($(this).hasClass('like')) {

      $("#likeCount").html("<div>" + (++likeCount) + "</div>");
      console.log('I am Liked')
    }
    else {
      $("#likeCount").html("<div>" + (--likeCount) + "</div>");
      //  alert('Are You Sure You want to Remove from Wishlist?');
      console.log('I am Unliked')
    }

  });
  


  
  // Notification Toggler
  $('.notify .icons').click(function () {
    $('.notification-toggle').toggle();
  })

  $('#liveToastBtn').click(function () {
    $('#liveToast').toast('show')
  });


  // Form Label Transition to top
  $('input').focus(function(){
    $(this).parents('.form-group').addClass('focused');
  });
  $('input').blur(function(){
    var inputValue = $(this).val();
    if ( inputValue == "" ) {
      $(this).removeClass('filled');
      $(this).parents('.form-group').removeClass('focused');  
    } else {
      $(this).addClass('filled');
    }
  });


let $editLink =$(".btn-link");
let $upBtns =$("#upBtns");
$editLink.on("click", ()=>{
  $upBtns.css({"display": "block"});
});

  // Onclick Cards change to Grid and List
  $list = $("#list-btn");
  $grid = $("#grid-btn");
  $cards = $(".event-cards");
  $grid_class = "col-lg-4";
  $list_class = "col-md-6";
  $col_12 = "col-md-12";
  $order1 ="order-1 col-md-12 ";
  $order2 ="order-2 col-md-12";
  $card_content =$(".card-content");
  $card_img =$(".card-img");
  
  
// Grid
  $grid.on("click", function(){
    // Add Active class to List Btn
    $(this).addClass("active");

    // Add Class to column and convert to grid
    $cards.addClass($grid_class);
    $list.removeClass("active")

    // add order to img and content in grid
    $card_content.addClass($order2);
    $card_img.addClass($order1).removeClass("pr-3");


    console.log("i am clicked")
  })
  
  // List 
  $list.on("click", function(){
    // Add Active class to Grid Btn
    $(this).addClass("active");
    $grid.removeClass("active");

    
    // remove order to img and content 
    $card_content.removeClass($order2);
    $card_img.removeClass($order1).addClass("pr-3");
    
    // Add Class to column and convert to list
    if($cards.hasClass($grid_class)){
      $cards.removeClass($grid_class);
    }
    else{
      $cards.addClass($list_class);
    }
    console.log("i am clicked")

  });

 
  





  // Side Bar Toogle Button for side content in all events page
  let $sideToggle = $("#sideBar-toggle");
  let $sideContent = $("#side-content");
  $sideContent.addClass("show")

  if($(window).width()<768){
    $sideToggle.css("display", "block");
    $sideContent.removeClass("show");
  }

  $(window).resize(function(){
    if ($(this).width() <= 767) {
        $sideToggle.css("display", "block");
        $sideContent.removeClass("show");
    }
    // else if($(this).width() >= 768){
      
    // }
    else{
      $sideToggle.css("display", "none");
      $sideContent.addClass("show")
    }
    
})

    $sideToggle.click(()=>{
      if($sideContent.hasClass("show")){
        $(this).removeClass("show");
      }
      else{
        $(this).addClass("show")
      }
    });


});



