import navStyles from './navigation-styles.scss';
import navComponent from './navigation.component.js';

import appServices from '../../services';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

export default angular.module('app.navigation', [uiRouter, appServices])
    .component('ptNav', navComponent)
    .name;
