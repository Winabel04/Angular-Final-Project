import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {

    approvedComplaints: any
    allApproved: any[] = []
    allhandyman: any
  constructor(
      private httpService: HttpService
  ) { }

  ngOnInit(): void {
     this.joinTable()
  }

  joinTable(){
    this.httpService.getApproved().subscribe(response => {
       this.approvedComplaints = response
       this.httpService.getHandyMan().subscribe(res => {
           this.allhandyman = res
           this.setAssignee(this.allhandyman,this.approvedComplaints)
       })
    })
  }

  setAssignee(handyman: [any], task: [any]){
    this.allApproved = []
  task.forEach(data => {
      const worker = handyman.find(person => person.name === data.handyman)
      data.phoneNumber = worker.phoneNumber
      data.email = worker.email
      this.allApproved.push(data)
  });
}
}
