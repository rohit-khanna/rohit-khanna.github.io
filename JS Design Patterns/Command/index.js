// Command Pattern

//#region  Actual Implementations
function add(x, y) {
  return x + y;
}
function sub(x, y) {
  return x - y;
}
function mul(x, y) {
  return x * y;
}
function div(x, y) {
  return x / y;
}
//#endregion

//#region  Commands
const Command = function (name, commandImplementation, undo, value) {
  this.commandImplementation = commandImplementation;
  this.name = name;
  this.undo = undo;
  this.value = value;
};

const AddCommand = function (value) {
  return new Command("add", add, sub, value);
};
const SubCommand = function (value) {
  return new Command("subtract", sub, add, value);
};
const MulCommand = function (value) {
  return new Command("multiply", mul, div, value);
};
const DivCommand = function (value) {
  return new Command("divide", div, mul, value);
};

//#endregion

//#region  Reciver
const Calculator = function () {
  var currentValue = 0;
  var commands = [];

  function execute(command) {
    var initVal = currentValue;
    currentValue = command.commandImplementation(currentValue, command.value);
    commands.push(command);
    console.log(
      `Performing ${command.name} command with Params(${initVal},${command.value}), to get ${currentValue}`
    );
  }

  function undo() {
    var initVal = currentValue;

    var command = commands.pop();
    currentValue = command.undo(currentValue, command.value);
    console.log(
      `UNdo ${command.name} command with Params(${initVal},${command.value}), to get ${currentValue}`
    );
  }

  return {
    undo,
    execute,
  };
};
//#endregion

const myCalculator = new Calculator();

myCalculator.execute(new AddCommand(5));
myCalculator.execute(new SubCommand(2));
myCalculator.execute(new MulCommand(10));
myCalculator.execute(new DivCommand(6));

myCalculator.undo();
myCalculator.undo();
