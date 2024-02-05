import {Component, OnInit} from '@angular/core';
import {AllusersService} from "../allusers.service";
import {ActivatedRoute} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{
  userId: number = 0;
  user = {
    firstName:'',
    lastName:'',
    email: '',
    role:'',
    password: ''
  };
  ngOnInit(): void {
    // Extract the userId from the route parameters
    this.route.params.subscribe(params => {
      this.userId = params['id'];
      // Now, you can use this.userId in your component logic
    });
  }
  constructor(private route: ActivatedRoute, private userService:AllusersService, private toastr:ToastrService) {}
  editUser(): void {
    this.userService.editUser(this.user, this.userId).subscribe(response => {
      this.toastr.info('User update successful: '+response);
    }, error => {
      this.toastr.error('An error occurred while updating the user. '+error.message);
    })
  }

}
