import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-handy-man-side-nav',
  templateUrl: './handy-man-side-nav.component.html',
  styleUrls: ['./handy-man-side-nav.component.css']
})
export class HandyManSideNavComponent implements OnInit {

  constructor(
      private httpService: HttpService
  ) { }

  ngOnInit(): void {
  }
  logOut(){
    this.httpService.logOut()
  }
}
