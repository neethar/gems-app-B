/* import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component'; */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GemsListComponent } from './gems-list/gems-list.component';
import { GemsAddComponent } from './gems-add/gems-add.component';
/*
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
 */

const routes: Routes = [
  { path: '', redirectTo: 'gems', pathMatch: 'full' },
  { path: 'gems', component: GemsListComponent },
  { path: 'add', component: GemsAddComponent },
  /* { path: 'add', component: CreateEmployeeComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
