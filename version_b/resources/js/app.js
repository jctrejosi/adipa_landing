import $ from 'jquery';

import './modules/header';
import { initNavbar } from './modules/navbar';
import { initHeroSearch } from './modules/hero-search';

$(document).ready(() => {
    initNavbar();
    initHeroSearch();
});