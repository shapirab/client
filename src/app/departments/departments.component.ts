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
    this.getDepartments(null, null);
  }

  getDepartments(filterValue:string | undefined | null, filterType:string | undefined | null){
    if(!filterValue){
      this.departmentService.getDepartments()
      .subscribe({
        next: res => this.departments = res,
        error: err => console.log(err)
      });
    }
    else{
      if(filterType === 'id'){
        this.departments = this.departments.filter(department =>
          department.id === parseInt(filterValue));
      }
      else if(filterType === 'name'){
        this.departments = this.departments.filter(department =>
          department.name
            .toLowerCase()
            .includes(filterValue.toLowerCase())
        );
      }
    }
  }

  onFilterByIdChanged(filterValue:string, filterType:string){
    this.getDepartments(filterValue, filterType);
  }

  onFilterByNameChanged(filterValue:string, filterType:string){
    this.getDepartments(filterValue, filterType);
  }
}
