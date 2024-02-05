import {Component, OnInit} from '@angular/core';
import {User, Vacuum} from "../model";
import {VacuumService} from "../vacuum.service";
import {ToastrService} from "ngx-toastr";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-vacuum-list',
  templateUrl: './vacuum-list.component.html',
  styleUrls: ['./vacuum-list.component.css']
})
export class VacuumListComponent implements OnInit{
  vacuums: Vacuum[] = [];

  constructor(private vacuumService:VacuumService,private toastr:ToastrService, public authService:AuthService) {
  }
  ngOnInit(): void {
    this.loadVacuums();
  }

  loadVacuums(): void {
    this.vacuumService.getAllVacuums().subscribe(
        (data: any) => {
          this.vacuums = data;
        },
        error => {
          console.error('Error fetching users:', error);
        }
    );
  }
  turnOn(vacuumId:number):void
  {
    console.log("turn on " +vacuumId)
    this.vacuumService.turnOn(vacuumId).subscribe(response => {
      this.toastr.info('Shcheduled: '+response);
    }, error => {
      this.toastr.error('An error occurred in scheduling. '+error);
    })
  }
  turnOff(vacuumId:number):void
  {
    this.vacuumService.turnOff(vacuumId).subscribe(response => {
      this.toastr.info('Shcheduled: '+response);
    }, error => {
      this.toastr.error('An error occurred in scheduling. '+error);
    })

  }
  discharge(vacuumId:number):void
  {
    this.vacuumService.discharge(vacuumId).subscribe(response => {
      this.toastr.info('Shcheduled: '+response);
    }, error => {
      this.toastr.error('An error occurred in scheduling. '+error.message);
    })

  }

  delete(vacuumId:number):void
  {
    this.vacuumService.delete(vacuumId).subscribe(response => {
      this.toastr.info('Deactivated succesfully: '+response);
    }, error => {
      this.toastr.error('An error occurred in deactivation. '+error.message);
    });
  }
}
