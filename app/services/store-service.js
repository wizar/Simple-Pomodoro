import EventEmmiter from 'events';

class AppStore extends EventEmmiter {
  constructor() {
    super();
    this.settings = {
      workSessionDuration: 25,
      breakDuration: 5,
      longBreakDuration: 15,
      sesssionsBeforeLongBreak: 4,
      autoStart: false,
      notifications: false,
    };

    this.state = 'BREAK_END'; // Available states: WORK_IN_PROGRESS, WORK_END, BREAK_IN_PROGRESS, BREAK_END
    this.workSessionsCount = 0;
    this.breakSessionsCount = 0;
  }

  getSettings() {
    return this.settings;
  }

  getState() {
    return this.state;
  }

  onAction(action) {
    switch (action.type) {
      case 'START_WORK':
        this.state = 'WORK_IN_PROGRESS';
        this.workSessionsCount++;
        this.emit('change');
        break;
      case 'STOP_WORK':
        this.state = 'WORK_END';
        this.emit('change');
        break;
      case 'START_BREAK':
        if (this.workSessionsCount % this.settings.sesssionsBeforeLongBreak === 0) {
          this.state = 'LONG_BREAK_IN_PROGRESS';
        } else {
          this.state = 'BREAK_IN_PROGRESS';
        }

        this.emit('change');
        break;
      case 'END_BREAK':
        this.state = 'BREAK_END';
        this.emit('change');
        break;
      default:
        console.error('Unrecognized action: ', action);
    }
  }
}

function initStore(appDispatcher) {
  const store = new AppStore();
  appDispatcher.register(store.onAction.bind(store));

  return store;
}

initStore.$inject = ['appDispatcher'];

export default initStore;
