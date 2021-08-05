import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
      private httpService: HttpService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm){
    console.log(f.value);
    this.httpService.register(f.value).subscribe(response => {console.log(response);
    });
    
  }
}
