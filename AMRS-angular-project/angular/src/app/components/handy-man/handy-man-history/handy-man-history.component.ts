import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-handy-man-history',
  templateUrl: './handy-man-history.component.html',
  styleUrls: ['./handy-man-history.component.css']
})
export class HandyManHistoryComponent implements OnInit {

    complaints:any
    solved: any
    unsolved: any
    credential: any;
    handymanInfo: any;

  constructor(
      private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.credential = window.localStorage.getItem('credential')
    this.handymanInfo = JSON.parse(this.credential)

    this.httpService.getComplaintByHandyman(this.handymanInfo.name).subscribe(response =>{
        this.complaints = response
        this.solved = this.filterStatus(this.complaints, "Complete")
        this.unsolved = this.filterStatus(this.complaints, "Approved")

    })
  }
  filterStatus(data: any[], status: string){
    return data.filter(element => element.status == status)
  }
}
