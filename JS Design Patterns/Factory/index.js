// Factory Pattern

const EMP_TYPE = {
  FULL_TIME: "FULL_TIME",
  TEMPORARY: "TEMPORARY",
  PART_TIME: "PART-TIME",
};

const BaseEmployee = function (name) {
  this.name = name;
};

//#region FullTime Employee
const fullTime = function (name) {
  BaseEmployee.call(this, name);
  this.hourly = 14;
};
fullTime.prototype = Object.create(BaseEmployee.prototype);
fullTime.prototype.constructor = fullTime;

//#endregion

//#region Temporary Employee

const temporary = function (name) {
  BaseEmployee.call(this, name);
  this.hourly = 7;
};
temporary.prototype = Object.create(BaseEmployee.prototype);
temporary.prototype.constructor = temporary;

//#endregion

//#region Part-time Employee

const partTime = function (name) {
  BaseEmployee.call(this, name);
  this.hourly = 10;
};
partTime.prototype = Object.create(BaseEmployee.prototype);
partTime.prototype.constructor = partTime;

//#endregion

const EmployeeFactory = (function () {
  var employee;

  const create = function (name, type) {
    switch (type) {
      case EMP_TYPE.FULL_TIME:
        employee = new fullTime(name);
        break;
      case EMP_TYPE.PART_TIME:
        employee = new partTime(name);
        break;
      case EMP_TYPE.TEMPORARY:
        employee = new temporary(name);
        break;
      default:
        break;
    }
    return employee;
  };

  return {
    create,
  };
})();

const employeesInCompany = [];

employeesInCompany.push(EmployeeFactory.create("john", EMP_TYPE.FULL_TIME));
employeesInCompany.push(EmployeeFactory.create("martha", EMP_TYPE.TEMPORARY));
employeesInCompany.push(EmployeeFactory.create("Kevin", EMP_TYPE.PART_TIME));

console.log(
  "Total Monthly Salary of each employee with 8 working hours per day:"
);
employeesInCompany.map((employee, index) => {
  console.log(
    `${index + 1}. ${employee.name} earns USD ${
      employee.hourly * 8 * 30
    } per month `
  );
});
//const john=
