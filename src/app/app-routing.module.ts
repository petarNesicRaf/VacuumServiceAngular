import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AllusersComponent} from "./allusers/allusers.component";
import {CreateUserComponent} from "./create-user/create-user.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {CreateVacuumComponent} from "./create-vacuum/create-vacuum.component";
import {VacuumListComponent} from "./vacuum-list/vacuum-list.component";
import {VacuumSearchComponent} from "./vacuum-search/vacuum-search.component";
import {VacuumScheduleComponent} from "./vacuum-schedule/vacuum-schedule.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'users', component: AllusersComponent},
  {path: 'create', component: CreateUserComponent},
  {path: 'edit-user/:id', component: EditUserComponent},
  {path: 'add-vacuum', component: CreateVacuumComponent},
  {path: 'all-vacuums', component: VacuumListComponent},
  {path: 'search', component: VacuumSearchComponent},
  {path: 'schedule', component: VacuumScheduleComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
