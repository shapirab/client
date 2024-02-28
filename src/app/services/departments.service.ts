import { Injectable } from '@angular/core';
import { Department } from '../models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {
  departments:Department[];
  constructor() {
    this.departments = [
      {id: 1, name: "IT"},
      {id: 2, name: "Support"},
      {id: 3, name: "R&D"},
    ];
  }

  getDepartments(){
    return this.departments;
  }
}
