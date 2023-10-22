import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExtractionComponent } from './extraction/extraction.component';
import { SimilarityComponent } from './similarity/similarity.component';
import { LanguageComponent } from './language/language.component';
import { SentimentComponent } from './sentiment/sentiment.component';
import { TokenComponent } from './token/token.component';
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ExtractionComponent,
    SimilarityComponent,
    LanguageComponent,
    SentimentComponent,
    TokenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
