import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-handy-man-change-info',
  templateUrl: './handy-man-change-info.component.html',
  styleUrls: ['./handy-man-change-info.component.css']
})
export class HandyManChangeInfoComponent implements OnInit {

    phone: number = 0;
    credential: any
    retype!: string
    newpass!: string
    userInfo: any

  constructor( 
      private httpService:HttpService
  ) { }

  ngOnInit(): void {
    this.credential = window.localStorage.getItem('credential')
    this.userInfo = JSON.parse(this.credential)
    console.log(this.userInfo)
    this.phone = this.userInfo.phoneNumber

  }

  update(form: NgForm){
    console.log(form.value);
    this.httpService.resetPassword(this.userInfo.id, form.value).subscribe(()=>{
        alert("Successfully changed!")
        form.reset()
    },error => {
        alert(error.error.errors)
        form.reset()
    })
}

}
