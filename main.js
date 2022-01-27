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

  $('.click-menu' ).on('click', openMenu);

  $('#x-icon' ).on('click', closeMenu);

  const goAbout = function(e) {
    console.log('about')
    $("html, body").animate({
      scrollTop: $(".about-container").offset().top
    }, 500);
    e.preventDefault();
  };

  $('#down-arrow' ).on('click', goAbout);
  $('#about' ).on('click', goAbout);
  $('#about-open').on('click', closeMenu);
  $('#about-open').on('click', goAbout);
  

  const goProjects = function(e) {
    console.log('projects')
    $("html, body").animate({
      scrollTop: $(".projects-container").offset().top
    }, 500);
    e.preventDefault();
  };

  $('#projects' ).on('click', goProjects);
  $('#projects-open').on('click', closeMenu);
  $('#projects-open').on('click', goProjects);

  const goContact = function(e) {
    console.log('contact')
    $("html, body").animate({
      scrollTop: $(".contact-container").offset().top
    }, 500);
    e.preventDefault();
  };

  $('#contact' ).on('click', goContact);
  $('#contact-open').on('click', closeMenu);
  $('#contact-open').on('click', goContact);

const goInsta = function(e) {
  console.log('insta')
  window.open('https://www.instagram.com/laurencoolvin/?hl=en', '_blank')
}

$('#insta').on('click', goInsta);

const goLinkedin = function(e) {
  console.log('linkedin')
  window.open('https://www.linkedin.com/in/laurenleighcolvin/', '_blank')
}

$('#linkedin').on('click', goLinkedin);


const goCodepen = function(e) {
  console.log('codepen')
  window.open('https://codepen.io/laurencolvin', '_blank')
}

$('#codepen').on('click', goCodepen);

const goGithub = function(e) {
  console.log('github')
  window.open('https://github.com/LaurenColvin', '_blank')
}

$('#github').on('click', goGithub);



});