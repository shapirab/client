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
    this.departments = this.departmentService.getDepartments();
  }

}
