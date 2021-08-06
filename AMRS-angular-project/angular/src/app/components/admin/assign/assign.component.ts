import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
    lisofIds: number[] = []
    isGenerating: boolean = false;
  constructor(
      private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.joinTable()
  }

  joinTable(isgenerating: boolean = false){
    this.httpService.getAssignees().subscribe(response => {
       this.allAssignes = response
       this.httpService.getHandyMan().subscribe(res => {
           if (isgenerating) {
            this.isGenerating = false
           }
           this.allhandyman = res
           this.setAssignee(this.allhandyman,this.allAssignes)
       })
    })
  }

  setAssignee(handyman: [any], task: [any]){
      this.assignes = []
    task.forEach(data => {
        const worker = handyman.find(person => person.name === data.handyman)
        data.phoneNumber = worker.phoneNumber
        data.email = worker.email
        this.assignes.push(data)
    });
  }

  generate(){
    this.isGenerating = true
    this.httpService.updateStatus(this.lisofIds).subscribe(() => {
        this.joinTable(true)
    })
  }

  addId(user_id:number, checked: boolean){
      if (checked && !this.lisofIds.some(id => id == user_id)) {
          this.lisofIds.push(user_id)
      }else{
         this.lisofIds.splice(this.lisofIds.findIndex(id => id == user_id), 1)
      }
  }

}
