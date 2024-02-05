import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {Router} from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080';
  private authToken: string = '';
  private role: string = '';
  private canRead:boolean = false
  private canCreate:boolean =false
  private loggedIn:boolean=false
  public canAddVacuum:boolean = false
  public canStartVacuum:boolean = false
  public canStopVacuum:boolean = false
  public canDischargeVacuum:boolean = false
  public canSearchVacuum:boolean = false
  public canDeleteVacuum:boolean = false

  constructor(private http: HttpClient, private router:Router) {}

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/v1/auth/signup`, user);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/v1/auth/signin`, credentials).pipe(
      tap((response: any) => {
        // Assuming your JWT token is in the 'token' property of the response
        if (response.token && response.role) {
          this.authToken = response.token;
          this.role = response.role;
          // Save the token to localStorage or sessionStorage
          this.saveToken(this.authToken)
          this.saveRole(this.role)
          this.saveId(response.id)
          this.loggedIn = true
        }
      })
    );;
  }
  saveId(id:string):void{
    localStorage.setItem("id", id)
  }
  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }
  saveRole(role: string): void {
    localStorage.setItem('role', role);
    const r = localStorage.getItem("role")
    this.resetFlags()

    if(r === "CAN_READ")
    {
      this.canRead = true
    }else if(r === "CAN_CREATE")
    {
      this.canCreate = true
    }else if(r === "CAN_ADD_VACUUM")
    {
      this.canAddVacuum = true
    }else if(r === "CAN_SEARCH_VACUUM")
    {
      this.canSearchVacuum = true
    }else if(r === "CAN_START_VACUUM")
    {
      this.canStartVacuum = true
    }else if(r === "CAN_STOP_VACUUM")
    {
      this.canStopVacuum = true
    }else if (r === "CAN_DISCHARGE_VACUUM")
    {
      this.canDischargeVacuum = true
    }else if(r === "CAN_DELETE_VACUUM")
    {
      this.canDeleteVacuum = true
    }
  }
  resetFlags():void{
    this.canRead = false
    this.canCreate = false
    this.canAddVacuum = false
    this.canSearchVacuum = false
    this.canStartVacuum = false
    this.canStopVacuum = false
    this.canDischargeVacuum = false
    this.canDeleteVacuum = false
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }
  getCanRead():boolean{
    return this.canRead
  }
  getCanCreate():boolean{
    return this.canCreate
  }
  isLoggedIn():boolean{
    return this.loggedIn
  }
  setLoggedIn(log:boolean):void{
    this.loggedIn = log
  }
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('id');
    this.router.navigate(['/login'])
  }
}
