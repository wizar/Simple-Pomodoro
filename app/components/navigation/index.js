import navComponent from './navigation.component.js';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

export default angular.module('app.navigation', [uiRouter])
    .component('ptNav', navComponent)
    .name;
