import {Component, OnInit} from '@angular/core';
import {AllusersService} from "../allusers.service";
import {User} from "../model";
import { Router } from '@angular/router';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit{
  users: User[] = [];

  constructor(private userService: AllusersService, private router:Router, private toastr:ToastrService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe(
      (data: any) => {
        this.users = data;
      },
      error => {
        this.toastr.error("Error occured while fetching users. " + error.message)
      }
    );
  }
  editUser(user:any):void
  {

    this.router.navigate(['/edit-user', user.id]); // Replace 'edit-user' with your route
  }

  deleteUser(userId:number):void{
    this.userService.deleteUser(userId).subscribe(response => {
      console.log('Delete successful:', response);
      // Optionally, redirect to login or perform other actions
    });
  }
  canDelete():boolean{
    return localStorage.getItem("role") === "CAN_DELETE"
  }
}
