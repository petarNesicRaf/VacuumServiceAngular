import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Vacuums';
  loggedIn:boolean= false
  canRead:boolean =false
  canCreate:boolean = false
  constructor(public auth: AuthService) {
  }
  ngOnInit() {
  }

  getCanCreate():boolean
  {
    return this.auth.getCanCreate()
  }
  getCanRead():boolean
  {
    return this.auth.getCanRead()
  }

  isLoggedIn():boolean
  {
    return this.auth.isLoggedIn()
  }

  logOut():void
  {
    this.auth.logout()
    this.auth.setLoggedIn(false)
  }

}
