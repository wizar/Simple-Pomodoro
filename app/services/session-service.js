function initSessionService(appStore, appActions, timerService) {

  this.getTickHandler = function (limit) {
    return (time) => {
      const nValue = time / (limit);
      this.registredHandler(time, nValue, limit);
    };
  };

  this.registerTickHandler = function (handler) {
    this.registredHandler = handler;
  };

  this.onStateChange = () => {
    const newState = appStore.getState();
    let limit;
    switch (newState) {
      case 'WORK_IN_PROGRESS':
        limit = 25 * 60 * 1000; // TODO: use settings!
        timerService.startInterval(this.getTickHandler(limit), limit).then(appActions.stopWorkSession);
        break;
      case 'WORK_END':
        timerService.breakInterval();
        break;
      case 'BREAK_IN_PROGRESS':
        limit = 5 * 60 * 1000; // TODO: use settings!
        timerService.startInterval(this.getTickHandler(limit), limit).then(appActions.endBreak); // !!!
        break;
      case 'BREAK_END':
        timerService.breakInterval();
        break;
      default:
        console.error('Unrecognized state:', newState);
    }
  };

  appStore.on('change', this.onStateChange);
};

initSessionService.$inject = ['appStore', 'appActions', 'timerService'];

export default initSessionService;
