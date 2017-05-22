import materializeCss from 'materialize-css/dist/css/materialize.css';
import mainStyles from './styles/main.scss';

import navigation from './components/navigation';
import sessionSwitch from './components/session-switch';

import routingConfig from './main.config';
import appServices from './services';

import materializeCssJs from 'materialize-css';
import angular from 'angular';

const app = angular.module('app', [navigation, appServices, sessionSwitch])
  .config(routingConfig);
