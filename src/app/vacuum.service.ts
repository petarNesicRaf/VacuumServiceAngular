import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VacuumService {
  private apiUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { }
  getAllVacuums():Observable<any>
  {
    return this.http.get(`${this.apiUrl}/vacuum/${localStorage.getItem("id")}/get-all-vacuums`);
  }
  createVacuum(vacuum:any):Observable<any>
  {
    return this.http.post(`${this.apiUrl}/vacuum/${localStorage.getItem("id")}/add`, vacuum);
  }
  turnOn(vId:number):Observable<any>
  {

    const data = {
      vacuumId:1
    }
    return this.http.post(`${this.apiUrl}/vacuum/turn-on`, data)
  }
  turnOff(vacuumId:number):Observable<any>
  {
    return this.http.post(`${this.apiUrl}/vacuum/${vacuumId}/turn-off`, null)
  }
  discharge(vacuumId:number):Observable<any>
  {
    return this.http.post(`${this.apiUrl}/vacuum/${vacuumId}/discharge`, null)
  }

  searchVacuumsByName(name: string, pageSize: number): Observable<any> {
    const url = `${this.apiUrl}/vacuum/search?name=${name}&pageSize=${pageSize}`;
    return this.http.get(url);
  }
  searchVacuumsByDate(fromDate:string, toDate:string): Observable<any>
  {
    const url = `${this.apiUrl}/vacuum/search-date?fromDate=${fromDate}&toDate=${toDate}`;
    return this.http.get(url);
  }
  searchByStatus(statusObject:any):Observable<any>
  {
    return this.http.post(`${this.apiUrl}/vacuum/search-status`, statusObject)
  }
  turnOnScheduled(vacuumId:number, date:string):Observable<any>
  {
    return this.http.post(`${this.apiUrl}/vacuum/${vacuumId}/turn-on-scheduled`, {dateTime:date})
  }
  turnOffScheduled(vacuumId:number, date:string):Observable<any>
  {
    return this.http.post(`${this.apiUrl}/vacuum/${vacuumId}/turn-off-scheduled`, {dateTime:date})
  }

  dischargeScheduled(vacuumId:number, date:string):Observable<any>
  {
    return this.http.post(`${this.apiUrl}/vacuum/${vacuumId}/discharge-scheduled`, {dateTime:date})
  }

  delete(vacuumId:number):Observable<any>
  {
    return this.http.post(`${this.apiUrl}/vacuum/${vacuumId}/delete-vacuum`, null)
  }

}
