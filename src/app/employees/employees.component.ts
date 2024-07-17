import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeesService } from '../services/employees.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];
  constructor(private employeesService: EmployeesService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getEmloyees();
  }

  getEmloyees(){
    this.employeesService.getEmployess().subscribe({
      next: (res) => {
        this.employees = res;
        this.employees.forEach(employee => {
          employee.fullName = `${employee.firstName} ${employee.lastName}`
        });
      },
      error: err => console.log(err)
    });
  }

  addEmployee(){
    this.modalService.open(AddEmployeeComponent).result.then(() => {
      this.getEmloyees();
    });
  }

  deleteEmployee(employeeID:number){
    this.employeesService.deleteEmployee(employeeID).subscribe({
      next: () => this.getEmloyees(),
      error: err => console.log(err)
    });
  }
}
