// Write your solution in this file!
let employee = {
    name: 'Mike',
    streetAddress: '123 Road Rd',
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    let updatedEmployee =  {employee};
        updatedEmployee[key] = value
    return employee, updatedEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,streetAddress,value){
    employee[streetAddress] = '12 Broadway'
    return employee
}

function deleteFromEmployeeByKey(employee,key, value){
    let updatedEmployee = { ...employee[key] };
    
}

function destructivelyDeleteFromEmployeeByKey(employee,key, value){
    let updatedEmployee = delete employee[key]
    return updatedEmployee
}