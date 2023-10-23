import { Injectable } from '@angular/core';
import {environment} from "../../environment/environment";
import {HttpClient} from "@angular/common/http";
import {Language, Similarity} from "../../model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SimilarityService {
  private readonly apiURL: string = environment.similarityApi
  constructor(private httpClient: HttpClient) { }

  getSimilarity(text1:string, text2:string):Observable<Similarity>
  {
    const token = localStorage.getItem("token")
    const encodedText1 = encodeURIComponent(text1)
    const encodedText2 = encodeURIComponent(text2)

    return this.httpClient.get<Similarity>(`${this.apiURL}?text1=${encodedText1}&text2=${encodedText2}&token=${token}`)
  }
}
