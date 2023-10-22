import { Injectable } from '@angular/core';
import {environment} from "../environment/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Language} from "../model";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private readonly apiURL: string = environment.languageApi

    constructor(private httpClient: HttpClient) { }

  getLanguage(text:string, clean:boolean):Observable<Language>{
      const token = localStorage.getItem("token")
      const encodedText = encodeURIComponent(text)

      return this.httpClient.get<Language>(`${this.apiURL}?text=${encodedText}&clean=${clean}&token=${token}`)

  }
}
