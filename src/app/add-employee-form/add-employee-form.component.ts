import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  }

  onSave(values: Employee){
    values.profileImage = this.url;
    console.log('Entering addEmployeeForm OnSave()');
    console.log(values);
    this.employeeService.addEmployee(values).subscribe({
      next: (res) => {
        console.log(res);
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


