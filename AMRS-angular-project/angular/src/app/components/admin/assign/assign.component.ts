import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.css']
})
export class AssignComponent implements OnInit {

    assignes: any = []
    allAssignes: any
    allhandyman: any
  constructor(
      private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.httpService.getAssignees().subscribe(response => {
        console.log(response)
       this.allAssignes = response
       this.httpService.getHandyMan().subscribe(res => {
           this.allhandyman = res
           this.setAssignee(this.allhandyman,this.allAssignes)
       })
    })
  }

  setAssignee(handyman: [any], task: [any]){
    task.forEach(data => {
        const worker = handyman.find(person => person.name === data.handyman)
        data.phoneNumber = worker.phoneNumber
        data.email = worker.email
        this.assignes.push(data)
    });
  }

}
