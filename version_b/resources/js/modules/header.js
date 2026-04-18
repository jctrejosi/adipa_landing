import $ from 'jquery';

const THEME_KEY = 'site-theme';
const DESKTOP_MEDIA = '(min-width: 1280px)';

function isDesktop() {
  return window.matchMedia(DESKTOP_MEDIA).matches;
}

function setTheme(isDark) {
  const root = document.documentElement;
  root.classList.toggle('dark', isDark);
  localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');

  $('.js-theme-toggle').attr('aria-pressed', String(isDark));
}

function openSearch($header) {
  $header.addClass('site-header--search-open');
  $('.js-header-search-input').trigger('focus');
}

function closeSearch($header) {
  $header.removeClass('site-header--search-open');
}

$(function () {
  const $header = $('.js-site-header');
  const $searchForm = $('.js-header-search-form');
  const $searchInput = $('.js-header-search-input');
  const $searchToggle = $('.js-header-search-toggle');
  const $searchClose = $('.js-header-search-close');
  const $themeToggle = $('.js-theme-toggle');

  const storedTheme = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(storedTheme ? storedTheme === 'dark' : prefersDark);

  $themeToggle.on('click', function () {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(!isDark);
  });

  $searchToggle.on('click', function () {
    if (isDesktop() || $header.hasClass('site-header--search-open')) {
      $searchForm.trigger('submit');
      return;
    }

    openSearch($header);
  });

  $searchClose.on('click', function () {
    closeSearch($header);
  });

  $searchForm.on('submit', function (e) {
    e.preventDefault();

    const value = $.trim($searchInput.val());

    $(document).trigger('site-header:search', [value]);
    closeSearch($header);
  });

  $('.js-header-menu').on('click', function () {
    $(document).trigger('site-header:menu');
  });

  $('.js-header-login').on('click', function () {
    $(document).trigger('site-header:login');
  });

  $('.js-header-register').on('click', function () {
    $(document).trigger('site-header:register');
  });

  $('.js-header-cart').on('click', function () {
    $(document).trigger('site-header:cart');
  });

  $(document).on('keydown', function (e) {
    if (e.key === 'Escape') {
      closeSearch($header);
    }
  });
});