import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-admin-change-info',
  templateUrl: './admin-change-info.component.html',
  styleUrls: ['./admin-change-info.component.css']
})
export class AdminChangeInfoComponent implements OnInit {
    
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

  update(form: NgForm){
    console.log(form.value);
    this.httpService.resetPassword(this.userInfo.id, form.value).subscribe(()=>{
        alert("Successfully changed!")
        form.reset()
    },error => {
        alert(error.error.errors)
        form.reset()
    })

//     this.router.navigate(['/list']);
  }

}
