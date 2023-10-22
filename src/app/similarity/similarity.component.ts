import { Component } from '@angular/core';

@Component({
  selector: 'app-similarity',
  templateUrl: './similarity.component.html',
  styleUrls: ['./similarity.component.css']
})
export class SimilarityComponent {
  text1: string = ""
  text2: string = ""

  submitForm(){
    console.log(this.text1 +  this.text2)
  }
}
