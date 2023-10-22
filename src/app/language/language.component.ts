import { Component } from '@angular/core';
import {Language} from "../model";
import {LanguageService} from "../services/language.service";

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent {
  text: string = ""
  clean: boolean = false
  language: Language ={
    timestamp:"",
    time:0,
    text:"",
    detectedLangs:[]
  }

  constructor(private languageService:LanguageService) {
  }
  submitForm()
  {
    console.log(this.text)
    this.languageService.getLanguage(this.text, this.clean).subscribe((language)=>{
      this.language = language
    })

  }

}
