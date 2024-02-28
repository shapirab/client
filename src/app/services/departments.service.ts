import { Injectable } from '@angular/core';
import { Department } from '../models/department';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {
  // departments:Department[];
  // constructor() {
  //   this.departments = [
  //     {id: 1, name: "IT"},
  //     {id: 2, name: "Support"},
  //     {id: 3, name: "R&D"},
  //   ];
  // }

  // getDepartments(){
  //   return this.departments;
  // }
  private url = '';
  constructor(private http: HttpClient){}

  getDepartments(): Observable<Department[]>{
    return this.http.get<Department[]>(this.url);
  }
}
