import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-tenant-history',
  templateUrl: './tenant-history.component.html',
  styleUrls: ['./tenant-history.component.css']
})
export class TenantHistoryComponent implements OnInit {

    // tenant
    credential: any;
    complaints: any
  constructor(
      private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.credential = window.localStorage.getItem('credential')
    const adminInfo = JSON.parse(this.credential)
    this.httpService.getComplaintsHistory(adminInfo.id).subscribe(response => {
        this.complaints = response;
    })
  }

}
