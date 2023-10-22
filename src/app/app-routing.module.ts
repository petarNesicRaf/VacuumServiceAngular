import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExtractionComponent} from "./extraction/extraction.component";
import {LanguageComponent} from "./language/language.component";
import {SentimentComponent} from "./sentiment/sentiment.component";
import {SimilarityComponent} from "./similarity/similarity.component";
import {TokenComponent} from "./token/token.component";

const routes: Routes = [
  {
    path:"",
    component: TokenComponent
  },
  {
    path:"language",
    component: LanguageComponent
  },
  {
    path:"sentiment",
    component:SentimentComponent
  },
  {
    path: "similarity",
    component: SimilarityComponent
  },
  {
    path:"extraction",
    component: ExtractionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
