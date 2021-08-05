import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private httpService:HttpService,
               private router : Router ) { }

  ngOnInit(): void {

  } 

  userKind:any;
  login(f:NgForm){
      console.log("My data", f.value);
      this.httpService.login(f.value).subscribe(response => {
        this.userKind = response;
          console.log(this.userKind.logincredential);
          const credential = {
              "id": this.userKind.logincredential.id,
              "name": this.userKind.logincredential.name,
              "email": this.userKind.logincredential.email,
              "userType": this.userKind.logincredential.userType
          }
            window.localStorage.setItem('credential', JSON.stringify(this.userKind.logincredential))
          if(this.userKind.logincredential.userType === "admin"){
              this.router.navigate(['/adminInfo']);
          }
          if(this.userKind.logincredential.userType === "tenant"){
            this.router.navigate(['/tenantInfo']);
        }
        if(this.userKind.logincredential.userType === "handyman"){
            this.router.navigate(['/handymanInfo']);
        }
        
      }, error => {
          console.error(error)
      });
  
  }




}
