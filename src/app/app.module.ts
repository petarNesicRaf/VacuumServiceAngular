import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExtractionComponent } from './extraction/extraction.component';
import { SimilarityComponent } from './similarity/similarity.component';
import { LanguageComponent } from './language/language.component';
import { SentimentComponent } from './sentiment/sentiment.component';
import { TokenComponent } from './token/token.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { HistoryComponent } from './history/history.component';
import { RequestPipe } from './pipes/request.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExtractionComponent,
    SimilarityComponent,
    LanguageComponent,
    SentimentComponent,
    TokenComponent,
    HistoryComponent,
    RequestPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
