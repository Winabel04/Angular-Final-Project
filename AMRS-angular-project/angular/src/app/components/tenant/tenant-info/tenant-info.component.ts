import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tenant-info',
  templateUrl: './tenant-info.component.html',
  styleUrls: ['./tenant-info.component.css']
})
export class TenantInfoComponent implements OnInit {

    credential: any;
    tenantInfo: any
  constructor() { }

  ngOnInit(): void {
      this.credential = window.localStorage.getItem('credential')
      this.tenantInfo = JSON.parse(this.credential)
      console.log(JSON.parse(this.credential))
  }


}
