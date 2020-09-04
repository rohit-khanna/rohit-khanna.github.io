const normalFactory = function normalClass(initialValue) {
  // our main class
  var privateVariable = initialValue;

  function increment() {
    privateVariable++;
  }

  function currentValue() {
    return `value: ${privateVariable}`;
  }

  return {
    increment,
    currentValue
  };
};

module.exports.normalFactory = normalFactory;
