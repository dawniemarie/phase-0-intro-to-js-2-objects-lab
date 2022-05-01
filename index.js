const employee = {
    name: 'Mary',
    streetAddress: '325 Central Avenue'
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const updateEmployee = {...employee};
    updateEmployee[key] = value;
    return updateEmployee;
} // non-destructively updates employee with key and value //

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
} // destructively updates employee with key and value //

function deleteFromEmployeeByKey(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    delete newEmployee.name;
    return newEmployee;
} // non-destructively deletes key from employee

function destructivelyDeleteFromEmployeeByKey() {
    delete employee.name;
    return employee;

}
// destructively deletes key from employee




