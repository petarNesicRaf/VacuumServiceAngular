import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'TextAnalysis';
  loggedIn:boolean= false

  ngOnInit() {
    this.isLogedIn()
  }
  isLogedIn(){
    if(localStorage.getItem("token")!==null) this.loggedIn=true
    else this.loggedIn=false
  }

  logOut()
  {
    console.log("logged out")
    localStorage.removeItem("token")
  }
}
