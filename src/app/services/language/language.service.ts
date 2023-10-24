import { Injectable } from '@angular/core';
import {environment} from "../../environment/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Language} from "../../model";
import {HistoryService} from "../history/history.service";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private readonly apiURL: string = environment.languageApi

    constructor(private httpClient: HttpClient, private historyService:HistoryService) { }

  getLanguage(text:string, clean:boolean):Observable<Language>{
      const token = localStorage.getItem("token")
      const encodedText = encodeURIComponent(text)
      const url = `${this.apiURL}?text=${encodedText}&clean=${clean}&token=${token}`
      const date = new Date().toLocaleString(); // Get the current date and time
      const format =`[${date}] GET ${url}`
      this.historyService.push(format)

      return this.httpClient.get<Language>(url)

  }
}
