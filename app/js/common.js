$('body').css('overflow', 'visible');

$('.phone-dropdown-icon').click(() => {
  $('.phone-secondary').toggleClass('open');
});

// handleing menu clicking
const menu = (index, value) => {
  console.log('before', value);
  if (value === 'hidden') {
    $('body').css('overflow', 'visible');
  }
  if (value === 'visible') {
    $('body').css('overflow', 'hidden');
  }
};

$('.menu-toggle').on('click', function (e) {
  e.preventDefault();
  $('.menu').toggleClass('menu_active');
  $('.content').toggleClass('content_active');
  $('body').css('overflow', menu);
});
