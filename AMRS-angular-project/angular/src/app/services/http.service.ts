import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

    baseUrl = "http://127.0.0.1:8000/api/";

  constructor(private http:HttpClient) { }

  register(data:any){
    return this.http.post(`${this.baseUrl}armsystemUser/user`, data);
  }

  login(data:any){
    return this.http.post(`${this.baseUrl}armsystemUser/login`, data);
  }

  complaint(data:any){
    return this.http.post(`${this.baseUrl}Complaint/userComplaint`, data);
  }

  getHandyMan(){
      return this.http.get(`${this.baseUrl}armsystemUser/handymans`);
  }

  getComplaintsHistory(id: any){
      return this.http.get(`${this.baseUrl}Complaint/complaintsHistory/${id}`)
  }

  resetPassword(id:any, data:any){
      return this.http.put(`${this.baseUrl}armsystemUser/resetPass/${id}`, data)
  }

  getAssignees(){
      return this.http.get(`${this.baseUrl}armsystemUser/handymans/pendings`)
  }
}
