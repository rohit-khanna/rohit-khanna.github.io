const SubjectFactory = (function () {
  var instance;

  function Subject() {
    const observerList = {};
    var currentTime;

    setInterval(() => {
      currentTime = new Date().toUTCString();
      notify();
    }, 1000);

    function subscribe(observerId, fn) {
      console.log("Adding", observerId);
      observerList[observerId] = fn;
    }

    function unsubscribe(observerId) {
      console.log("removing", observerId);
      observerList[observerId] = undefined;
    }

    function notify() {
      Object.values(observerList).forEach((fn) => {
        if (fn) fn(currentTime);
      });
    }

    return {
      subscribe,
      unsubscribe,
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = new Subject();
      }
      return instance;
    },
  };
})();
