const body = document.querySelector('body');
const menuBtn = document.querySelector('.menuBtn');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu_close');

menuBtn.addEventListener('click', function () {
  menu.classList.remove('d-none');
});

menuClose.addEventListener('click', function () {
  menu.classList.add('d-none');
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
        stagePadding: 30,
      },
      600: {
        items: 2,
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
