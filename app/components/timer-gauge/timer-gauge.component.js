import tmpl from './timer-gauge.tmpl.html';
import styles from './timer-gauge-styles.scss';
import SvgGauge from './svg-gauge.js';

class TimerGaugeComponent {
  constructor($scope, appStore, appActions, sessionService) {
    this.$scope = $scope;
    this.appStore = appStore;
    this.appActions = appActions; // TODO: Another way to do it?
    this.state = appStore.getState();
    this.svgGauge = new SvgGauge(); // TODO: pass element to constructor

    this.time = 0;

    appStore.on('change', this.onStateChange.bind(this));

    sessionService.registerTickHandler((time, value, limit) => {
      this.time = limit - time;
      this.svgGauge.changeAngle(value);
    });
  }

  onStateChange() {
    this.state = this.appStore.getState();
    switch (this.state) {
      case 'WORK_END':
        this.time = 0;
        this.svgGauge.changeAngle(0);
        break;
      case 'BREAK_END':
        this.time = 0;
        this.svgGauge.changeAngle(0);
        break;
    }
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

TimerGaugeComponent.$inject = ['$scope', 'appStore', 'appActions', 'sessionService'];

export default {
  template: tmpl,
  controller: TimerGaugeComponent,
};
