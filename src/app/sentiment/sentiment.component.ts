import { Component } from '@angular/core';

@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.css']
})
export class SentimentComponent {
  text: string =""
  en: boolean = false
  it: boolean = false
  auto: boolean = false

  submitForm(){

  }
}
