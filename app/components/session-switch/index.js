import angular from 'angular';

import appServices from '../../services';
import sessionSwitch from './session-switch.component.js';

export default angular.module('app.session-switch', [appServices])
  .component('sessionSwitch', sessionSwitch)
  .name;
