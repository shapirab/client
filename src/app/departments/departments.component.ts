import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../services/departments.service';
import { Department } from '../models/department';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  departments: Department[] = [];
  constructor(private departmentService: DepartmentsService) { }

  ngOnInit(): void {
    this.departmentService.getDepartments()
    .subscribe({
      next: res => this.departments = res,
      error: err => console.log(err)
    });
  }

}
