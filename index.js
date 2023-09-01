// Write your solution in this file!
const employee= {name: "Jeffrey", streetAddress: 14}
function updateEmployeeWithKeyAndValue(employee, key, value){
const newemployee ={ ...employee};
newemployee[key]= value;
return newemployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key, value){
employee[key] = value
return employee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
employee[key]= value 
return employee
}
function deleteFromEmployeeByKey(employee, key){
const newemployee ={ ...employee}
delete newemployee[key]
return newemployee
}