import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
    complaints: any
    baseUrl = "http://127.0.0.1:8000/api/";

  constructor(
      private http:HttpClient,
        private router: Router
      ) { }

// for Register

  register(data:any){
    return this.http.post(`${this.baseUrl}armsystemUser/user`, data);
  }


//   for Login
  login(data:any){
    return this.http.post(`${this.baseUrl}armsystemUser/login`, data);
  }

// for the Complaints of every tenants
  complaint(data:any){
    return this.http.post(`${this.baseUrl}Complaint/userComplaint`, data);
  }

// to get all the handyMan
  getHandyMan(){
      return this.http.get(`${this.baseUrl}armsystemUser/handymans`);
  }

//getting complaints by every user
  getComplaintsHistory(id: any){
      return this.http.get(`${this.baseUrl}Complaint/complaintsHistory/${id}`)
  }


  //to reset or update password
  resetPassword(id:any, data:any){
      return this.http.put(`${this.baseUrl}armsystemUser/resetPass/${id}`, data)
  }

//to get who is assign to that particular task
  getAssignees(){
      return this.http.get(`${this.baseUrl}armsystemUser/handymans/pendings`)
  }

  //to update the status of thw work whether it is approved, pending or completed
  updateStatus(data: any[]){
      return this.http.put(`${this.baseUrl}Complaint/updateStatus`, data)
  }

  updateToComplete(ids: number[]){
      return this.http.put(`${this.baseUrl}Complaint/updateStatusComplete`, ids)
  }

//to generate the status " pending " to approved 
  getApproved(){
      return this.http.get(`${this.baseUrl}Complaint/getApproved`)
  }

  // to get all the complaints
  getCountByStatus(){
      return this.http.get(`${this.baseUrl}Complaint/getAllComplaints`)
  }

 //to get by the handy man his work or his specific tasks 
  getComplaintByHandyman(name: string){
      return this.http.get(`${this.baseUrl}Complaint/${name}`)
  }

  logOut(){
      window.localStorage.removeItem('credential')
    this.router.navigate(['/landingPage'])
  }

}
