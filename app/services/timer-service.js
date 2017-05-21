function initTimerService($interval, $q) {
  let interval;
  let sessionPromise;

  function timeCheck(then, limit, updateCallback) { // Is there another way to update values? Callback is no fun
    return function () {
      const current = (new Date()).getTime();
      if (current > then + limit) {
        $interval.cancel(interval);
        sessionPromise.resolve(current - then);
      } else {
        updateCallback(current - then);
      }
    };
  }

  return {
    startInterval(tickHandler, limit) {
      const now = (new Date()).getTime();
      sessionPromise = $q.defer();

      interval = $interval(timeCheck(now, limit, tickHandler), 200);
      return sessionPromise.promise;
    },

    breakInterval() {
      $interval.cancel(interval);
      sessionPromise.reject(0);
    },
  };
}

initTimerService.$inject = ['$interval', '$q'];

export default initTimerService;
