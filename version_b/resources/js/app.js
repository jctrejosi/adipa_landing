import $ from 'jquery';

import './modules/header';
import './modules/navbar';
import { initNavbar } from './modules/navbar';

$(document).ready(() => {
    initNavbar();
});