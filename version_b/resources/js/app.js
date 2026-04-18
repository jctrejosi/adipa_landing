import $ from 'jquery';

import './modules/header';
import { initNavbar } from './modules/navbar';
import { initHeroSearch } from './modules/hero-search';
import { initContactForms } from './modules/contact-form';

$(document).ready(() => {
    initNavbar();
    initHeroSearch();
    initContactForms();
});