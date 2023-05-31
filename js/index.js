gsap.from('.hero h1', {
  delay: 1,
  duration: 3,
  x: 300,
  ease: 'power2.out',
  opacity: 0,
  scale: 3,
});

gsap.from('.socialNav li', {
  delay: 3,
  duration: 1,
  x: 200,
  ease: 'power2.out',
  opacity: 0,
  stagger: 0.2,
});

AOS.init();

const body = document.querySelector('body');
const header = document.querySelector('header');
const menuBtn = document.querySelector('.menuBtn');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu_close');

window.addEventListener('scroll', function () {
  if (window.scrollY > 200) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

menuBtn.addEventListener('click', function () {
  menu.classList.remove('d-none');

  // gsap.from('mainMenu li', {
  //   delay: 1,
  //   duration: 1,
  //   y: -20,
  //   ease: 'power2.out',
  //   opacity: 0,
  // });
});

menuClose.addEventListener('click', function () {
  menu.classList.add('d-none');
});

$('.circle-btn').on('mouseenter', function () {
  console.log('hello');
  setTimeout(() => {
    $('.getinTouch h2').css('color', '#fff');
  }, 500);
});

$('.circle-btn').on('mouseleave', function () {
  console.log('hello');
  setTimeout(() => {
    $('.getinTouch h2').css('color', '#000');
  }, 500);
});

// Home Slider
$('.home-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  margin: 0,
  nav: false,
  dots: false,
  items: 1,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
});

// Our Projects Slider
function showProjectsbyCat(cat) {
  if (cat == 'all') {
    $('#projects-hidden .project').each(function () {
      var owl = $('.owl-carousel');
      elem = $(this).parent().html();

      owl.owlCarousel('add', elem).owlCarousel('update');
      $(this).parent().remove();
    });
  } else {
    $('#projects-hidden .project.' + cat).each(function () {
      var owl = $('.owl-carousel');
      elem = $(this).parent().html();

      owl.owlCarousel('add', elem).owlCarousel('update');
      $(this).parent().remove();
    });

    $('#projects-carousel .project:not(.project.' + cat + ')').each(
      function () {
        var owl = $('.owl-carousel');
        targetPos = $(this).parent().index();
        elem = $(this).parent();

        $(elem).clone().appendTo($('#projects-hidden'));
        owl.owlCarousel('remove', targetPos).owlCarousel('update');
      },
    );
  }
}

$(window).on('load', function () {
  $('.counter').countUp();

  //Click event for filters
  $('#project-terms a').click(function (e) {
    e.preventDefault();
    $('#project-terms a').removeClass('active');

    cat = $(this).attr('ID');
    $(this).addClass('active');
    showProjectsbyCat(cat);
    //alert('filtering'+ cat);
  });

  //Initialize owl carousel
  $('#projects-carousel').owlCarousel({
    // Most important owl features
    items: 2,
    lazyLoad: true,
    loop: false,
    navText: [
      "<div class='nav-button owl-prev'><img src='./images/arrow-left.png'></div>",
      "<div class='nav-button owl-next'><img src='./images/arrow-left.png'></div>",
    ],
    nav: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        margin: 0,
        stagePadding: 20,
      },
      600: {
        items: 1,
        nav: false,
        margin: 0,
        stagePadding: 50,
      },
      1000: {
        items: 2,
        nav: true,
        loop: false,
        stagePadding: 100,
        margin: 30,
      },
      1600: {
        items: 3,
        nav: true,
        loop: false,
        stagePadding: 50,
        margin: 30,
      },
    },
  });
});
