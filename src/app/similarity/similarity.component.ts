import { Component } from '@angular/core';
import {Language, Similarity} from "../model";
import {LanguageService} from "../services/language/language.service";
import {SimilarityService} from "../services/similarity/similarity.service";

@Component({
  selector: 'app-similarity',
  templateUrl: './similarity.component.html',
  styleUrls: ['./similarity.component.css']
})
export class SimilarityComponent {
  text1: string = ""
  text2: string = ""
  similarity: Similarity ={
    timestamp:"",
    time:0,
    lang:"",
    langConfidence:0,
    text1:"",
    text2:"",
    similarity:0
  }

  constructor(private similarityService:SimilarityService) {
  }
  submitForm(){
    this.similarityService.getSimilarity(this.text1, this.text2).subscribe((similarity)=>{
      console.log(similarity)
      this.similarity = similarity
      console.log(this.similarity)
    })
    //console.log(this.similarity)
  }
}
