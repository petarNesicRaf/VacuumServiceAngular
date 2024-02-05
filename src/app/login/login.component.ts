import { Component } from '@angular/core';
import {AuthService} from "../auth.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private toastr:ToastrService, private router:Router) {}

  login(): void {
    this.authService.login(this.user).subscribe(response => {
      this.toastr.info('Login successful: '+response);
      this.router.navigate(['/all-vacuums'])
    }, error => {
      this.toastr.error('An error occurred while logging in. '+error.message);
    })
  }
}
