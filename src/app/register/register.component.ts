import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import {Router} from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    firstName:'',
    lastName:'',
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router:Router,private toastr: ToastrService) {}

  register(): void {
    this.authService.register(this.user).subscribe(response => {
      this.router.navigate(["/login"]);
    }, error => {
      this.toastr.error('Registration failed. Please try again. '+error.message); // Display error message
    });
  }
}
