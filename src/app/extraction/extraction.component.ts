import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-extraction',
  templateUrl: './extraction.component.html',
  styleUrls: ['./extraction.component.css']
})
export class ExtractionComponent {
  text: string=""
  sliderValue: number = 0.8
  paragraph: string = ""
  image: boolean = false
  abstract: boolean = false
  categories: boolean = false




  submitForm()
  {
    console.log("p", this.paragraph)
    console.log("check", this.image, this.abstract, this.categories)
  }
  updateSliderValue(event: any) {
    this.sliderValue = parseFloat(event.target.value);
    console.log("change", this.sliderValue)
  }
  onSliderChange()
  {
    console.log("S",this.sliderValue)
  }
  updateRangeValue() {
    const rangeValueElement = document.getElementById('rangeValue');
    if (rangeValueElement) {
      rangeValueElement.textContent = this.sliderValue.toString();
    }
  }

}
