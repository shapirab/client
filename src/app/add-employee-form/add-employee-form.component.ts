import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/employee';
import { Department } from '../models/department';
import { DepartmentsService } from '../services/departments.service';
import { error } from 'console';

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
    private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe({
      next: res => this.departments = res,
      error: err => console.log(err)
    });
  }

  onSave(values: Employee){}

  handleFileChange(event: any):void{
    if(event.target.files){
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (e) => {
        this.url = e.target?.result;
      };
    }
  }

  // handleFileChange(event:Event):void {
  //   let inputElement = event.target as HTMLInputElement;
  //   if (inputElement.files && inputElement.files.length > 0) {
  //     this.selectedImage = inputElement.files[0];
  //     this.getObjectUrl(this.selectedImage);


  //     //this.changeDetector.detectChanges();
  //   // setTimeout(() => {
  //   //   if (inputElement.files && inputElement.files.length > 0) {
  //   //     this.selectedImage = inputElement.files[0];
  //   //   }
  //   // }, 0);
  //   }
  // }

  // getObjectUrl(file: File) {
  //   this.url = URL.createObjectURL(file);
  // }

  // ngOnDestroy(): void {
  //   if (this.selectedImage) {
  //     URL.revokeObjectURL(this.getObjectUrl(this.selectedImage));
  //   }
  // }
}


