function initActions(appDispatcher) {
  return {
    updateSettings(newSettings) {
      appDispatcher.dispatch({
        type: 'UPDATE_SETTINGS',
        payload: newSettings,
      });
    },

    startWorkSession() {
      appDispatcher.dispatch({
        type: 'START_WORK',
      });
    },
    stopWorkSession() {
      appDispatcher.dispatch({
        type: 'STOP_WORK',
      });
    },
    startBreak() {
      appDispatcher.dispatch({
        type: 'START_BREAK',
      });
    },
    endBreak() {
      appDispatcher.dispatch({
        type: 'END_BREAK',
      });
    },
  };
}

initActions.$inject = ['appDispatcher'];

export default initActions;
