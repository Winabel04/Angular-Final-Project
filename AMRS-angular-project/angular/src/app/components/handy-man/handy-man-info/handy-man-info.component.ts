import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-handy-man-info',
  templateUrl: './handy-man-info.component.html',
  styleUrls: ['./handy-man-info.component.css']
})
export class HandyManInfoComponent implements OnInit {

    credential: any;
    handymanInfo: any;
    approved: any = 0;
    pending: any = 0;
    complete: any =0;
    response: any;
  constructor(
      private httpService: HttpService
  ) { }

  ngOnInit(): void {
      this.credential = window.localStorage.getItem('credential')
      this.handymanInfo = JSON.parse(this.credential)
      this.httpService.getComplaintByHandyman(this.handymanInfo.name).subscribe(response => {
        this.response = response
        this.approved = this.countOccurrences(this.response, "Approved")
        this.pending = this.countOccurrences(this.response, "Pending")
        this.complete = this.countOccurrences(this.response, "Complete")
      })
  }


  // to know the number of status of his works
  countOccurrences = (array: any[], value:string) => {
    const count = array.filter(val => {
        return val.status == value
    })
    return count.length
};
}
