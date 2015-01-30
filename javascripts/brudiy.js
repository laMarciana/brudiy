(function() {
  var createSpinner, loading, page_init, removeSpinner;

  loading = null;

  $(document).ready(function() {
    return page_init();
  });

  $(document).off('page:always').on('page:always', function() {
    return page_init();
  });

  $(document).off('page:done').on('page:done', function() {
    if ($('body').scrollTop() > 300 || $('html').scrollTop() > 300) {
      $('html, body').animate({
        scrollTop: 0
      }, 'slow');
    }
    $('a:focus').blur();
    return removeSpinner();
  });

  $(document).off('page:loading').on('page:loading', function($target) {
    return createSpinner();
  });

  removeSpinner = function() {
    clearTimeout(loading);
    return $('.main').removeClass('loading');
  };

  createSpinner = function() {
    return loading = setTimeout(function() {
      return $('.main').addClass('loading');
    }, 1000);
  };

  page_init = function() {
    Modernizr.load([
      {
        load: 'iegt5!ielt9!/javascripts/selectivizr/selectivizr.js'
      }
    ]);
    if (!Modernizr.input.placeholder) {
      $('html').addClass('no-placeholder');
    }
    $('.flexslider').flexslider({
      animation: 'slide'
    });
    $('.nav-main-menu').removeClass('open');
    if (screen.width <= 500) {
      $('.nav-main-menu ul').hide();
    }
    $('.nav-main-menu').off('touchstart').on('touchstart', function(e) {
      e.preventDefault();
      e.stopPropagation();
      $('.nav-main-menu ul').toggle();
      return $('.nav-main-menu').toggleClass('open');
    });
    $('.nav-main-menu a').off('touchstart').on('touchstart', function(e) {
      return e.stopPropagation();
    });
    $('.card-meta').hide();
    $('.card').off('mouseenter mouseleave').hover(function() {
      return $(this).find('.card-meta').animate({
        'height': 'toggle',
        'opacity': 'toggle'
      }, 'medium');
    });
    $('.card-link').off('touchstart').on('touchstart', function(e) {
      if (!$(this).hasClass('open')) {
        e.preventDefault();
        e.stopPropagation();
        $(this).addClass('open');
        return $(this).find('.card-meta').animate({
          'height': 'toggle',
          'opacity': 'toggle'
        }, 'medium');
      }
    });
    $('.banner-go').hide();
    $('.banner-wrapper').off('mouseenter mouseleave').hover(function() {
      return $(this).find('.banner-go').animate({
        'opacity': 'toggle'
      }, 'medium');
    });
    $('.permalink').off('click').click(function() {
      return $(this).select();
    });
    $('.pinable img').each(function() {
      var button, src;
      src = encodeURIComponent($(this).attr('src'));
      $(this).wrap('<div class="pinterest-wrapper">');
      button = '<a class="pinterest pinterest-hover new-window" href="http://pinterest.com/pin/create/%20button/?url=' + encodeURIComponent(window.location) + '&media=' + src + '&description=' + encodeURIComponent($('.heading-main').text()) + '" style="">Pinterest</a>';
      return $(this).after(button);
    });
    $('.pinterest-wrapper').off('mouseenter mouseleave').hover(function() {
      return $(this).find('.pinterest-hover').toggle();
    });
    $('.pinterest-wrapper').off('touchstart').on('touchstart', function(e) {
      if (!$(e.target).is('.pinterest-hover')) {
        return $(this).find('.pinterest-hover').toggle();
      }
    });
    $('.link-top').off('click').click(function(e) {
      e.preventDefault();
      return $('html, body').animate({
        scrollTop: 0
      }, 'slow');
    });
    return $('.new-window').off('click').click(function(e) {
      e.preventDefault();
      return window.open($(this).attr('href'));
    });
  };

}).call(this);
