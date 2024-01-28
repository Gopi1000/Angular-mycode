import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AjaxServiceService {

  private baseUrl = "http://localhost:8080/";
  constructor(private httpClient: HttpClient) { }

  registerList(url: string, data: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + url, data);
  }

  sendGetRequest(url: string): Observable<any> {
    return this.httpClient.get(this.baseUrl + url);
  }

  getcustomerListByid(url: string): Observable<any> {
    return this.httpClient.get(this.baseUrl + url);
  }

}
