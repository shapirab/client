import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { DepartmentsComponent } from './departments/departments.component';

const routes: Routes = [
  {
    path: 'home',
    children: [
      { path: 'employees', component: EmployeesComponent },
      { path: 'departments', component: DepartmentsComponent }
    ],
  },
  { path: '', redirectTo: 'home/employees', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
