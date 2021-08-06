import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
    credential: any;
    handymanInfo: any;
    works: any
    complaints: any
    lisofIds: number[] = []
  constructor(
      private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.credential = window.localStorage.getItem('credential')
    this.handymanInfo = JSON.parse(this.credential)
      this.getComplaints()
  }
  filterStatus(data: any[], status: string){
    return data.filter(element => element.status == status)
  }

  getComplaints() {
    this.httpService.getComplaintByHandyman(this.handymanInfo.name).subscribe(response => {
        this.complaints = response
        this.works = this.filterStatus(this.complaints, "Approved")
      })
  }

  addId(user_id:number, checked: boolean){
    if (checked && !this.lisofIds.some(id => id == user_id)) {
        this.lisofIds.push(user_id)
    }else{
       this.lisofIds.splice(this.lisofIds.findIndex(id => id == user_id), 1)
    }
}
updateStatus(){
    this.httpService.updateToComplete(this.lisofIds).subscribe(() => {
        alert("Status updated!")
        this.getComplaints()
    })
}
}
