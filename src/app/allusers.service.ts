import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AllusersService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/v1/admin/get-users`);
  }
  createUser(user:any):Observable<any>
  {
    return this.http.post(`${this.apiUrl}/api/v1/admin/create-user`, user);
  }

  editUser(user:any, userId:number):Observable<any>
  {
    return this.http.post(`${this.apiUrl}/api/v1/auth/${userId}/update-user`,user)
  }
  deleteUser(userId:number):Observable<any>
  {
    return this.http.delete(`${this.apiUrl}/api/v1/admin/${userId}/delete-user`)
  }
}
