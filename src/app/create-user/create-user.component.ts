import { Component } from '@angular/core';
import {AuthService} from "../auth.service";
import {AllusersService} from "../allusers.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  user = {
    firstName:'',
    lastName:'',
    email: '',
    password: ''
  };

  constructor(private userService: AllusersService, private toastr:ToastrService) {}

  createUser(): void {
    this.userService.createUser(this.user).subscribe(response => {
      this.toastr.info('User created: '+response);
    }, error => {
      this.toastr.error('An error occurred while creating a user. '+error.message);
    })
  }
}
