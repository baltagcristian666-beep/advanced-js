//static

class Employee {
    static employeeCount = 0
    constructor(name) {
        this.name = name
        Employee.employeeCount++
    }
    
    static getEmployeeCount() {
        return Employee.employeeCount
    }
}

const employee1 = new Employee("Alice")
const employee2 = new Employee("Bob")
const employee3 = new Employee("Smith")
console.log(Employee.employeeCount)
//3
console.log(Employee.getEmployeeCount())
//3

/*
Are not inherited.
Are used to create a propertie or method which is not used outside the class
Can be used outide the class but the class name must be specified first.
*/