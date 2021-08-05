import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-lodge',
  templateUrl: './lodge.component.html',
  styleUrls: ['./lodge.component.css']
})
export class LodgeComponent implements OnInit {
    credential:any
    handymans: any
  constructor(
      private httpService: HttpService
  ) { }

  ngOnInit(): void {
      this.httpService.getHandyMan().subscribe(response => this.handymans = response)
  }

 

  submitComplaint(lodge: NgForm){
    console.log(lodge.value);
    this.credential = window.localStorage.getItem('credential')
    const adminInfo = JSON.parse(this.credential)
    lodge.value.user_id = adminInfo.id;
    lodge.value.status = "Pending"
    console.log(lodge.value)
    this.httpService.complaint(lodge.value).subscribe(response => {
        alert("Successfully assigned")
        lodge.reset()
    });
    }
}
