// Write your solution in this file!
const employee = {
    name:"stephen",
    streetAddress: "11 Broadway",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value,
    };
}
const newEmployee = updateEmployeeWithKeyAndValue(
    employee,
    "name",
    "Sam"
);
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee;
}
const updatedAddress = destructivelyUpdateEmployeeWithKeyAndValue(
    employee["streetAddress"] = "12 Broadway"
);
function deleteFromEmployeeByKey(employee, key) {
    console.log(key)
    //#1 copy the original employee object
    console.log(employee)
    const nEmployee = {...employee}
    console.log(nEmployee)
    //delete the key
    delete nEmployee.name
    //return copied employee {}
    return nEmployee;
};    
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    
    delete employee.name
    //return copied employee {}
    return employee;
};
