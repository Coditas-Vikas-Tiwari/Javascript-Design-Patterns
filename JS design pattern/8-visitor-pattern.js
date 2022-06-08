function Employee(name, salary) {
  this.name = name;
  this.salary = salary;
}
Employee.prototype = {
  getSalary: function () {
    return this.salary;
  },
  setSalary: function (sal) {
    this.salary = sal;
  },
  accept: function (visitorFunction) {
    visitorFunction(this);
  },
};

////////////////////////////

const coditas = new Employee("coditas", 25000000);
console.log(coditas.getSalary());

function ExtraSalary(emp) {
  emp.setSalary(emp.getSalary() * 2);
}

coditas.accept(ExtraSalary);
console.log(coditas.getSalary());
