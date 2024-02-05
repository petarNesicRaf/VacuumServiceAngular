import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllusersComponent } from './allusers/allusers.component';
import {AuthInterceptorService} from "./auth-interceptor.service";
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { CreateVacuumComponent } from './create-vacuum/create-vacuum.component';
import { VacuumListComponent } from './vacuum-list/vacuum-list.component';
import { VacuumSearchComponent } from './vacuum-search/vacuum-search.component';
import { VacuumScheduleComponent } from './vacuum-schedule/vacuum-schedule.component';
import {ToastrModule} from "ngx-toastr";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AllusersComponent,
    CreateUserComponent,
    EditUserComponent,
    CreateVacuumComponent,
    VacuumListComponent,
    VacuumSearchComponent,
    VacuumScheduleComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // Add this line

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
