import angular from 'angular';

import routingConfig from './constants/routing-config.js';
import AppDispatcher from './dispatcher-service.js';
import AppActions from './actions-service.js';
import AppStore from './store-service.js';
import TimerService from './timer-service.js';

export default angular.module('app.services', ['ng'])
    .constant('routingConfig', routingConfig)
    .service('appDispatcher', AppDispatcher)
    .service('appActions', AppActions)
    .service('appStore', AppStore)
    .service('timerService', TimerService)
    .name;
