import { Component } from '@angular/core';
import {SentimentService} from "../services/sentiment/sentiment.service";
import {Language, Sentiment} from "../model";

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

  lang:string=  ""

  sentiment: Sentiment ={
    timestamp:"",
    time:0,
    lang:"",
    sentiment:{
      score:0,
      type:""
    }
  }
  constructor(private sentimentService:SentimentService) {
  }
  submitForm(){

    if(this.en)
      this.lang="en"
    else if(this.it)
      this.lang="it"
    else
      this.lang="auto"

    this.sentimentService.getSentiment(this.text,this.lang).subscribe((s)=>{
      this.sentiment = s
    })
  }
  getBackgroundColor(): string {
    const hue = this.mapValueToHue(this.sentiment.sentiment.score);
    const saturation = 100; // 100% saturation
    const lightness = 50 + (this.sentiment.sentiment.score * 35);
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }
  mapValueToHue(value: number): number {
    return (value + 1) * 60;
  }


}
