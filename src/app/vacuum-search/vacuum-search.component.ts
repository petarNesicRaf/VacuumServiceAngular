import { Component } from '@angular/core';
import {VacuumService} from "../vacuum.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-vacuum-search',
  templateUrl: './vacuum-search.component.html',
  styleUrls: ['./vacuum-search.component.css']
})
export class VacuumSearchComponent {
  searchName: string = '';
  pageSize: number = 10; // Set a default page size
  searchResults: any[] = [];
  fromDate:string ='';
  toDate:string='';
  statusOn: boolean = false;
  statusOff: boolean = false;
  statusDischarging: boolean = false;
  constructor(private vacuumService: VacuumService, private toastr:ToastrService) { }

  search(): void {
    if (this.searchName.trim() !== '') {
      this.vacuumService.searchVacuumsByName(this.searchName, this.pageSize)
          .subscribe((results: any) => {
            this.searchResults = results;
          },error => {
            this.toastr.error('Search failed '+error.message); // Display error message
          });

    } else {
      // Handle empty search query, e.g., clear the results
      this.searchResults = [];
    }
  }
  searchStatus():void{
    const statusFilters = {
      on: this.statusOn,
      off: this.statusOff,
      discharging: this.statusDischarging
    };
    this.vacuumService.searchByStatus(statusFilters).subscribe((results: any) => {
          this.searchResults = results;
        },error => {
          this.toastr.error('Search failed '+error.message); // Display error message
        }
    )
  }
  searchDate(): void {
    if (this.fromDate.trim() !== '' && this.toDate.trim() !== '') {

      this.vacuumService.searchVacuumsByDate(this.fromDate + "T00:00:00",this.toDate+"T00:00:00")
          .subscribe((results: any) => {
            this.searchResults = results;
          },error => {
            this.toastr.error('Search failed '+error.message); // Display error message
          });

    } else {
      // Handle empty search query, e.g., clear the results
      this.searchResults = [];
    }
  }
}
