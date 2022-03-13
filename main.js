$(() => {
if (typeof $ == 'undefined'){
    console.log('oops! I still have to link my jQuery properly!');
  } else {console.log('I did it! I linked jQuery and this js file properly!')};


  /* MENU FUNCTIONS */
  const openMenu = function(e) {
    console.log('open')
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




  /* SCROLL FUNCTIONS */

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


/* ICONS TO LINKS */ 
  
const goInsta = function(e) {
  console.log('insta')
  window.open('https://www.instagram.com/letstalkloco/?hl=en', '_blank')
}

$('#insta').on('click', goInsta);
$('#insta-open').on('click', goInsta);

const goFaceboook = function(e) {
  console.log('FB')
  window.open('https://www.facebook.com/letstalkloco/', '_blank')
}

$('#facebook').on('click', goFaceboook);
$('#fb-open').on('click', goFaceboook);

const goPinterest = function(e) {
  console.log('Pin')
  window.open('https://www.pinterest.com/laurencolvindesigns', '_blank')
}

$('#pinterest').on('click', goPinterest);
$('#pin-open').on('click', goPinterest);


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


/* READ MORE */

const readMore = function(e) {
  console.log('read more')
  $("#more").slideToggle();
  $("#dots").css("display", "none");
  if ($("#read-more").text() == "Read More") { 
    $("#read-more").text("Read Less"); 
} else { 
    $("#read-more").text("Read More"); 
}; 
  e.preventDefault();
};

$('#read-more').on('click', readMore);



/* CAROUSEL FUNCTION */

let slideIndex = 1;
showSlides(slideIndex);

let plusSlides= function(e){
  let n=1;
  showSlides(slideIndex += n);
  console.log("next");
  e.preventDefault();
}

function showSlides(n) {
  let slides = document.getElementsByClassName("projects");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1){slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
    $(slides[slideIndex-1]).css("display","block");
  }
}

const nextSlide = function(e) {
  console.log('carousel')
  $(".project-one").css("display", "none");
  // $(".project-two").css("display", "flex");
  $(".project-three").css("display", "block");
  e.preventDefault();
};

$('#right-arrow' ).on('click', plusSlides);



});