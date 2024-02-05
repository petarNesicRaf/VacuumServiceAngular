import {Component, OnInit} from '@angular/core';
import {Vacuum} from "../model";
import {VacuumService} from "../vacuum.service";
import {ToastrService} from "ngx-toastr";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-vacuum-schedule',
  templateUrl: './vacuum-schedule.component.html',
  styleUrls: ['./vacuum-schedule.component.css']
})
export class VacuumScheduleComponent implements OnInit{
  vacuums: Vacuum[] = [];
  public date:string = ''
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
  turnOnScheduled(vacuumId:number):void
  {
    console.log("date on " +this.date)
    this.vacuumService.turnOnScheduled(vacuumId, this.date).subscribe(response => {
      this.toastr.info('Shcheduled: '+response);
    }, error => {
      this.toastr.error('An error occurred in scheduling. '+error.message);
    })
  }
  turnOffScheduled(vacuumId:number):void
  {
    console.log("date off " +this.date)
    this.vacuumService.turnOffScheduled(vacuumId, this.date).subscribe(response => {
      this.toastr.info('Shcheduled: '+response);
    }, error => {
      this.toastr.error('An error occurred in scheduling. '+error.message);
    })
  }
  dischargeScheduled(vacuumId:number):void
  {
    console.log("date discharge " +this.date)
    this.vacuumService.dischargeScheduled(vacuumId,this.date).subscribe(response => {
      this.toastr.info('Shcheduled: '+response);
    }, error => {
      this.toastr.error('An error occurred in scheduling. '+error.body);
    })

  }
}
