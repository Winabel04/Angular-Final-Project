import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-tenant-info',
  templateUrl: './tenant-info.component.html',
  styleUrls: ['./tenant-info.component.css']
})
export class TenantInfoComponent implements OnInit {

// dinhi geh kuha ang mga info sa tenant nga ma display sa browser
    credential: any;
    tenantInfo: any
    complaints: any
    approved: any
    pending: any
    complete: any
  constructor(
      private HttpService: HttpService
  ) { }

  ngOnInit(): void {
      this.credential = window.localStorage.getItem('credential')
      this.tenantInfo = JSON.parse(this.credential)
      this.HttpService.getComplaintsHistory(this.tenantInfo.id).subscribe(response => {
          this.complaints = response
          this.approved = this.countOccurrences(this.complaints, "Approved")
          this.pending = this.countOccurrences(this.complaints, "Pending")
          this.complete = this.countOccurrences(this.complaints, "Complete")
      })
  }
  countOccurrences = (array: any[], value:string) => {
    const count = array.filter(val => {
        return val.status == value
    })
    return count.length
};

}
