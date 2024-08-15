import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/employee';
import { Department } from '../models/department';
import { DepartmentsService } from '../services/departments.service';
import { error } from 'console';
import { EmployeesService } from '../services/employees.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-employee-form',
  templateUrl: './add-employee-form.component.html',
  styleUrls: ['./add-employee-form.component.css']
})
export class AddEmployeeFormComponent implements OnInit {
  @Input() employee: Employee | undefined;
  departments: Department[] = [];
  //selectedImage: File | null = null;
  url: string | ArrayBuffer | null | undefined;
  constructor(private departmentService: DepartmentsService,
    private employeeService: EmployeesService,
    private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe({
      next: res => this.departments = res,
      error: err => console.log(err)
    });
    this.url = '../../assets/portrait-solid.png';
    if(this.employee){
      console.log(this.employee)
      this.url = this.employee.profileImage;
    }
  }

  onSave(values: Employee){
    if(this.employee){
      console.log(values)
      console.log(this.employee)
      values.profileImage = this.url;
      this.employeeService.updateEmployee(this.employee.employeeID, values)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.activeModal.close();
        },
        error: err => console.log(err)
      });
      return;
    }
    values.profileImage = this.url;
    this.employeeService.addEmployee(values).subscribe({
      next: (res) => {
        this.activeModal.close();
      },
      error: err => console.log(err)
    });

  }

  handleFileChange(event: any):void{
    if(event.target.files){
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (e) => {
        this.url = e.target?.result;
      };
    }
  }
}


