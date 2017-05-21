function initActions(appDispatcher) {
  return {
    updateSettings(newSettings) {
      appDispatcher.dispatch({
        type: 'UPDATE_SETTINGS',
        payload: newSettings,
      });
    },
  };
}

initActions.$inject = ['appDispatcher'];

export default initActions;
