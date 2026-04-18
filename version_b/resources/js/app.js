import $ from 'jquery';

import './modules/header';
import { initNavbar } from './modules/navbar';
import { initHeroSearch } from './modules/hero-search';
import { initContactForms } from './modules/contact-form';
import { initFooter } from './modules/footer';

$(document).ready(() => {
    initNavbar();
    initHeroSearch();
    initContactForms();
    initFooter();
});