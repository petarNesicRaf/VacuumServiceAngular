import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExtractionComponent} from "./extraction/extraction.component";
import {LanguageComponent} from "./language/language.component";
import {SentimentComponent} from "./sentiment/sentiment.component";
import {SimilarityComponent} from "./similarity/similarity.component";
import {TokenComponent} from "./token/token.component";
import {AuthGuard} from "./auth/auth.guard";

const routes: Routes = [
  {
    path:"",
    component: TokenComponent,
  },
  {
    path:"language",
    component: LanguageComponent,
    canActivate: [AuthGuard]


  },
  {
    path:"sentiment",
    component:SentimentComponent,
    canActivate: [AuthGuard]

  },
  {
    path: "similarity",
    component: SimilarityComponent,
    canActivate: [AuthGuard]


  },
  {
    path:"extraction",
    component: ExtractionComponent,
    canActivate: [AuthGuard]


  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
