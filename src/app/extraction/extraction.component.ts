import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {EntityService} from "../services/entity/entity.service";
import {Entity} from "../model";

@Component({
  selector: 'app-extraction',
  templateUrl: './extraction.component.html',
  styleUrls: ['./extraction.component.css']
})
export class ExtractionComponent implements OnInit{
  text: string=""
  sliderValue: number = 0.8
  paragraph: string = ""
  image: boolean = false
  abstract: boolean = false
  categories: boolean = false


  entity:Entity = {
    timestamp:"",
    time:0,
    lang:"",
    annotations:[]
  }

  constructor(private entityService:EntityService)
  {}


  ngOnInit() {
   //binding failed
  }



  submitForm(){
      let include = this.checkInclude(this.image, this.abstract, this.categories)
      //binding failed
      this.entityService.getEntity(this.text, include, 0.5).subscribe((e)=>{
        this.entity = e
        console.log(this.entity)
      })
  }

  checkInclude(image:boolean, abstract:boolean, categories:boolean):string
  {
    let ret:string=""
    if(image)
      ret+="image,"
    if(abstract)
      ret+="abstract,"
    if(categories)
      ret+="categories,"

    return ret.slice(0,-1)

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
