$(() => {
if (typeof $ == 'undefined'){
    console.log('oops! I still have to link my jQuery properly!');
  } else {console.log('I did it! I linked jQuery and this js file properly!')};
  
  const openMenu = function(e) {
    console.log('open')
    // $(".menu-open").css("display", "block");
    // $(".menu-closed").css("display", "none");
    $('.menu-open').slideToggle();
    e.preventDefault();
  };

  const closeMenu = function(e) {
    console.log('close')
    $(".menu-open").css("display", "none");
    $(".menu-closed").css("display", "flex");
    e.preventDefault();
  };

  $('.hamburger-menu' ).on('click', openMenu);

  $('#x-icon' ).on('click', closeMenu);

  const goDown = function(e) {
    console.log('scroll')
    $("html, body").animate({
      scrollTop: $(".about-container").offset().top
    }, 2000);
    e.preventDefault();
  };

  $('#down-arrow' ).on('click', goDown);


});