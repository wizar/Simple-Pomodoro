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
  }

  getSettings() {
    return this.settings;
  }

  onAction(action) {
    switch (action.type) {
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
