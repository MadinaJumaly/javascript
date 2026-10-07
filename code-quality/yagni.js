export function searchEmployees(employees, search) {
    return employees.filter(employee =>
        employee.name.includes(search)
    );
}