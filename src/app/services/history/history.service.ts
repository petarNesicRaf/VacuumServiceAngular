import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  historyStack:string[] = []
  constructor() { }

  push(item:string){
    this.historyStack.push(item)
  }

  pop(){
     this.historyStack.pop()
  }

  removeAll(){
    this.historyStack.splice(0, this.historyStack.length)
  }

}
