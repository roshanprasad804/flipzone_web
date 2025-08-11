import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl = 'http://localhost:8080/api/v1';

  userCreationUrl = 'users/addUser';
  userlogin = 'users/login';

  constructor(private http:HttpClient) { }

  //User Registration
  addUser(formData:any) {
    return this.http.post(`${this.baseUrl}/${this.userCreationUrl}`,formData);
  }

  //User Login
  userLogin(creds:any) {
    return this.http.post(`${this.baseUrl}/${this.userlogin}`,creds);
  }
}
