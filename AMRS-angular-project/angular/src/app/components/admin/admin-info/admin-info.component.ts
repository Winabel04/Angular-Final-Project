import { Component, OnInit} from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-admin-info',
  templateUrl: './admin-info.component.html',
  styleUrls: ['./admin-info.component.css']
})
export class AdminInfoComponent implements OnInit {
    credential: any;
    approved: any = 0
    pending: any = 0
    complete: any =0
    adminInfo: any
    response: any
  constructor(
      private httpService: HttpService
  ) { }

  ngOnInit(): void {
      this.credential = window.localStorage.getItem('credential')
      this.adminInfo = JSON.parse(this.credential)
      console.log(JSON.parse(this.credential))
      this.httpService.getCountByStatus().subscribe(response => {
        this.response = response
        this.approved = this.countOccurrences(this.response, "Approved")
        this.pending = this.countOccurrences(this.response, "Pending")
        this.complete = this.countOccurrences(this.response, "Complete")
      })
  }
  countOccurrences = (array: any[], value:string) => {
      const count = array.filter(val => {
          return val.status == value
      })
      return count.length
  };
}
