import tmpl from './navigation.tmpl.html';

import angular from 'angular';

class NavController {
  constructor($scope, routingConfig) {
    $scope.links = routingConfig.map(x => x.name);
  }
}

NavController.$inject = ['$scope', 'routingConfig'];

export default {
  template: tmpl,
  controller: NavController,
};
