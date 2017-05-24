import angular from 'angular';

import appServices from '../../services';
import timerGauge from './timer-gauge.component.js';

export default angular.module('app.timer-gauge', [appServices])
  .component('timerGauge', timerGauge)
  .name;
