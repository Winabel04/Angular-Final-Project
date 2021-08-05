import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-handy-man-info',
  templateUrl: './handy-man-info.component.html',
  styleUrls: ['./handy-man-info.component.css']
})
export class HandyManInfoComponent implements OnInit {

    credential: any;
    handymanInfo: any;
  constructor() { }

  ngOnInit(): void {
      this.credential = window.localStorage.getItem('credential')
      this.handymanInfo = JSON.parse(this.credential)
      console.log(JSON.parse(this.credential))
  }
}
