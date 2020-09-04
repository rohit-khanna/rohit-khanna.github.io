const singletonFactory = (function(initVal) {
  // variable to store the instance
  var instance;
  function singletonClass(initialValue) {
    // our main class
    var privateVariable = initialValue;

    function increment() {
      privateVariable++;
    }

    function currentValue() {
      return `value: ${privateVariable}`;
    }

    // public API
    return {
      increment,
      currentValue
    };
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = new singletonClass(initVal);
        return instance;
      } else {
        return instance;
      }
    }
  };
})(1);

module.exports.singletonFactory = singletonFactory;
