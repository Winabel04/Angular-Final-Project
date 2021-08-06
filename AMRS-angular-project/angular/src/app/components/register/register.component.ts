import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    userType: any
    roomNumber:any = '0'
  constructor(
      private httpService: HttpService,
      private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm){
    console.log(f.value);
    f.value.roomNumber = this.roomNumber
    this.httpService.register(f.value).subscribe(() =>  {
        this.router.navigate(["/login"])
    },error => {
        alert("Registration failed! Please recheck!")
    });
    
  }

  userKind:any;
  register(f:NgForm){
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
            if(this.userKind.logincredential.userType === "admin" || this.userKind.logincredential.userType === "handyman"){
                // e disable ang roomNumber
                // default to "N/A"
            }else{
                // e able and roomNumber
            }
          
            // *ngIf = if ang room number is the same with others kay e message or alert nga "the room number is already taken"
        
      }, error => {
          console.error(error)
      });
  
      
  }
  
}
