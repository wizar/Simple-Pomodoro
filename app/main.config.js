import uiRouter from 'angular-ui-router';

function routing($stateProvider, routingConfig) {
  routingConfig.forEach($stateProvider.state);
}

routing.$inject = ['$stateProvider', 'routingConfig'];

export default routing;
