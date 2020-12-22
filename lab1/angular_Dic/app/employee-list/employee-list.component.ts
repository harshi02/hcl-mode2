import { Component } from '@angular/core';
@Component({
 selector: 'app-list-employee',
 templateUrl: './employee-list.component.html',
 styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employees: any[] = [
    {
    code: 'emp101', name: 'Raj', gender: 'Male',
    annualSalary: 5500, dateOfBirth: '25/6/1988'
    },
    {
    code: 'emp102', name: 'Keshav', gender: 'Male',
    annualSalary: 5700.95, dateOfBirth: '9/6/1982'
    },
    {
    code: 'emp103', name: 'Gunika', gender: 'Female',
    annualSalary: 5900, dateOfBirth: '12/8/1979'
    },
    {
    code: 'emp104', name: 'Ekta', gender: 'Female',
    annualSalary: 6500.826, dateOfBirth: '14/10/1980'
    },
    ];
  constructor() { }


}
