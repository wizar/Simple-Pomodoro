import tmpl from './session-switch.tmpl.html';

class SessionSwitchController {
  constructor($scope, appStore, appActions) {
    this.$scope = $scope;
    this.appStore = appStore;
    this.appActions = appActions; // TODO: Another way to do it?

    $scope.mdl = {
      state: appStore.getState(),
    };

    appStore.on('change', this.onStateChange.bind(this));
  }

  onStateChange() {
    this.$scope.mdl.state = this.appStore.getState();
  }

  startSession() {
    this.appActions.startWorkSession();
  }

  stopSession() {
    this.appActions.stopWorkSession();
  }

  startBreak() {
    this.appActions.startBreak();
  }

  stopBreak() {
    this.appActions.endBreak();
  }
}

SessionSwitchController.$inject = ['$scope', 'appStore', 'appActions'];

export default {
  template: tmpl,
  controller: SessionSwitchController,
};
