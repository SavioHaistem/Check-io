import { defineStore } from 'pinia'
export interface employee {
  name: string
  icon: string
}

export const useEmployees = defineStore('employees', {
  state: () => ({
    selectedEmployee: {} as employee,
    employees: [
      { name: 'fabio', icon: '../assets/usersIcons/fabio.jpeg' },
      { name: 'jacy', icon: '../assets/usersIcons/jacy.jpeg' },
    ] as Array<employee>,
  }),
  getters: {
    getEmployees: (state) => state.employees,
    getSelectedEmployee: (state) => state.selectedEmployee
  },
  actions: {
    addEmployee(employee: employee) {
      this.employees.push(employee);
    },
    selectEmployee(employeeIndex: number) {
      this.selectedEmployee = this.employees[employeeIndex];
    }
  }
})