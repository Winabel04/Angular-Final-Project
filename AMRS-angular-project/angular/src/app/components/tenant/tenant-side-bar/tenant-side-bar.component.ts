import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-tenant-side-bar',
  templateUrl: './tenant-side-bar.component.html',
  styleUrls: ['./tenant-side-bar.component.css']
})
export class TenantSideBarComponent implements OnInit {

  constructor(
      private httpService: HttpService
  ) { }

  ngOnInit(): void {
  }

  logOut(){
    this.httpService.logOut()
  }

}
