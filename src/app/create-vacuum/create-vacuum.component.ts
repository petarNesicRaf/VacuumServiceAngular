import { Component } from '@angular/core';
import {AuthService} from "../auth.service";
import {VacuumService} from "../vacuum.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-vacuum',
  templateUrl: './create-vacuum.component.html',
  styleUrls: ['./create-vacuum.component.css']
})
export class CreateVacuumComponent {
  vacuum = {
    name: '',
    active: ''
  };

  constructor(private vacuumService: VacuumService, private toastr:ToastrService, private router:Router) {}

  createVacuum():void{
    this.vacuumService.createVacuum(this.vacuum).subscribe(response => {
      this.toastr.info('Vacuum creation successful: '+response);
      this.router.navigate(['/all-vacuums'])
    }, error => {
      this.toastr.error('An error occurred while creating a vacuum. '+error.message);
    })
  }

}
