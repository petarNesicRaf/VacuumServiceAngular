import { Injectable } from '@angular/core';
import {environment} from "../../environment/environment";
import {HttpClient} from "@angular/common/http";
import {Sentiment} from "../../model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SentimentService {
  private readonly apiURL: string = environment.sentimentApi
  constructor(private httpClient: HttpClient) { }

  getSentiment(text:string,lang:string): Observable<Sentiment>
  {
    const token = localStorage.getItem("token")
    const encodedText = encodeURIComponent(text)
    return this.httpClient.get<Sentiment>(`${this.apiURL}?lang=${lang}&text=${encodedText}&token=${token}`)
  }



}
