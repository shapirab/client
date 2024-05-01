import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  // employees: Employee[];
  // constructor() {
  //   this.employees = [
  //     {id: 1, firstName: 'Benjamin', lastName: 'Shapira', departmentId: 1,
  //     dateOfJoining: new Date("2019-01-16"), profileImage: ''},
  //     {id: 2, firstName: 'Yami', lastName: 'Happy', departmentId: 2,
  //     dateOfJoining: new Date("2020-06-13"), profileImage: ''},
  //     {id: 3, firstName: 'Ronen', lastName: 'Segev', departmentId: 3,
  //     dateOfJoining: new Date("2022-11-01"), profileImage: ''},
  //     {id: 4, firstName: 'Moshe', lastName: 'Mizrachi', departmentId: 1,
  //     dateOfJoining: new Date("2024-01-21"), profileImage: ''},
  //     {id: 5, firstName: 'Jacob', lastName: 'Juravel', departmentId: 2,
  //     dateOfJoining: new Date("2018-09-12"), profileImage: ''},
  //     {id: 6, firstName: 'Maayan', lastName: 'Inbar', departmentId: 3,
  //     dateOfJoining: new Date("2019-10-28"), profileImage: ''},
  //   ];
  // }

  // getEmployess(){
  //   return this.employees;
  // }
  private url = 'https://localhost:7177/api/employees';
  constructor(private http: HttpClient){}

  getEmployess(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url);
  }

}
