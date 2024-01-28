import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  private baseUrl = "http://localhost:8080/api/user/";
  constructor(private httpClient: HttpClient) { }

  registerList(url: string, data: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + url, data);
  }

  loginRequest(url: string, data: any, myparams?: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + url, data, { params: myparams });
  }

  getuserList(url: string): Observable<any> {
    return this.httpClient.get(this.baseUrl + url);
  }

  updatePassword(url: string, data: any, myparams?: any): Observable<any> {
    return this.httpClient.put(this.baseUrl + url, data, { params: myparams });
  }

  getUserByid(url: string): Observable<any> {
    return this.httpClient.get(this.baseUrl + url);
  }

  updateUserByid(url: string,data: any): Observable<any> {
    return this.httpClient.put(this.baseUrl + url, data);
  }

  deleteUser(url: string): Observable<any> {
    return this.httpClient.delete(this.baseUrl + url);
  }
}
