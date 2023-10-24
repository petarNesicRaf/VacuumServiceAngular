import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent {
  token: string = ""

  saveToken(){
    if(this.token !== "")
      localStorage.setItem("token", this.token)
  }

  protected readonly localStorage = localStorage;
}
