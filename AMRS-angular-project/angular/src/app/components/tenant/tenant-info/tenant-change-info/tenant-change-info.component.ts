import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tenant-change-info',
  templateUrl: './tenant-change-info.component.html',
  styleUrls: ['./tenant-change-info.component.css']
})
export class TenantChangeInfoComponent implements OnInit {

    phone: number = 0;
    credential: any
    retype!: string
    newpass!: string
    userInfo: any

  constructor(
      private httpService: HttpService
  ) { }

  ngOnInit(): void {

    this.credential = window.localStorage.getItem('credential')
    this.userInfo = JSON.parse(this.credential)
    console.log(this.userInfo)
    this.phone = this.userInfo.phoneNumber
  }


  //is the updating the info of a tenant which is the password and phone number
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
