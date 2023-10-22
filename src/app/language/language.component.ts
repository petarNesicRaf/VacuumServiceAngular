import { Component } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent {
  text: string = ""
  clean: boolean = false
  submitForm()
  {
    console.log(this.text)
  }

}
