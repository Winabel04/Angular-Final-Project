import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin-info',
  templateUrl: './admin-info.component.html',
  styleUrls: ['./admin-info.component.css']
})
export class AdminInfoComponent implements OnInit {

    credential: any;
    adminInfo: any
  constructor() { }

  ngOnInit(): void {
      this.credential = window.localStorage.getItem('credential')
      this.adminInfo = JSON.parse(this.credential)
      console.log(JSON.parse(this.credential))
  }

}
