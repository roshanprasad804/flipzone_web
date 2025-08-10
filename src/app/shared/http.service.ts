import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  addUser(data:any) {
    return this.http.post('http://localhost:8080/api/v1/users/adduser',data);
  }
}
