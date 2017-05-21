import angular from 'angular';

import routingConfig from './constants/routing-config.js';

export default angular.module('app.services', [])
    .constant('routingConfig', routingConfig)
    .name;
