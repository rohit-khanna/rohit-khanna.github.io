// Facade Design Pattern

const Bank = function () {
  this.verify = function (name, amount) {
    // some complex Logic
    return true;
  };
};

const CreditBureau = function () {
  this.getScore = function (name) {
    // some complex logic to fetch and evaluate
    return 501; // any value
  };
};

const BackgroundVerifier = function () {
  this.verify = function (name) {
    // complex logic or operations
    return true;
  };
};

const Mortgage = function (name) {
  this.name = name;
};

Mortgage.prototype.applyFor = function (amount) {
  var result = "approved";

  if (!new Bank().verify(this.name, amount)) {
    result = "denied";
  } else if (new CreditBureau().getScore(this.name) < 400) {
    result = "denied";
  } else if (!new BackgroundVerifier().verify(this.name)) {
    result = "denied";
  }
  return this.name + " has been " + result + " for a " + amount + " mortgage";
};

var mortgage = new Mortgage("John Doe");
var result = mortgage.applyFor("$100,000");
console.log(result);
