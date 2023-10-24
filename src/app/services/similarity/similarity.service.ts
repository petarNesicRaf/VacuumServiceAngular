import { Injectable } from '@angular/core';
import {environment} from "../../environment/environment";
import {HttpClient} from "@angular/common/http";
import {Language, Similarity} from "../../model";
import {Observable} from "rxjs";
import {HistoryService} from "../history/history.service";

@Injectable({
  providedIn: 'root'
})
export class SimilarityService {
  private readonly apiURL: string = environment.similarityApi
  constructor(private httpClient: HttpClient, private historyService: HistoryService) { }

  getSimilarity(text1:string, text2:string):Observable<Similarity>
  {
    const token = localStorage.getItem("token")
    const encodedText1 = encodeURIComponent(text1)
    const encodedText2 = encodeURIComponent(text2)
    const url = `${this.apiURL}?text1=${encodedText1}&text2=${encodedText2}&token=${token}`
    const date = new Date().toLocaleString(); // Get the current date and time
    const format =`[${date}] GET ${url}`

    this.historyService.push(format)
    return this.httpClient.get<Similarity>(url)
  }
}
