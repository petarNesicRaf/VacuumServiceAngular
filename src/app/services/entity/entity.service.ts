import { Injectable } from '@angular/core';
import {environment} from "../../environment/environment";
import {HttpClient} from "@angular/common/http";
import {Entity, Language} from "../../model";
import {Observable} from "rxjs";
import {HistoryService} from "../history/history.service";

@Injectable({
  providedIn: 'root'
})
export class EntityService {
  private readonly apiURL: string = environment.entityApi

  constructor(private httpClient: HttpClient, private historyService:HistoryService) { }

  getEntity(text:string, include:string, minConfidence:number):Observable<Entity>
  {
    const token = localStorage.getItem("token")
    const encodedText = encodeURIComponent(text)
    const encodedInclude = encodeURIComponent(include)
    const url = `${this.apiURL}?lang=en&text=${encodedText}&include=types%2C${encodedInclude}&min_confidence=${minConfidence}&token=${token}`
    const date = new Date().toLocaleString(); // Get the current date and time
    const format =`[${date}] GET ${url}`
    this.historyService.push(format)

    return this.httpClient.get<Entity>(url)
  }

}
