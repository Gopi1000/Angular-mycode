import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  private baseUrl = "http://localhost:8080/";
  constructor(private httpClient: HttpClient) { }


  sendGetRequest(url: string): Observable<any> {
    return this.httpClient.get(this.baseUrl + url);
  }

  sendPostRequest(url: string, data: any, myparams?: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + url, data, { params: myparams });
  }

  registerList(url: string, data: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + url, data);
  }

  updatePassword(url: string, data: any, myparams?: any): Observable<any> {
    return this.httpClient.put(this.baseUrl + url, data, { params: myparams });
  }

  // book ajax API calls

  getBookList(url: string): Observable<any> {
    return this.httpClient.get(this.baseUrl + url);
  }

  addBookList(url: string, data: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + url, data);
  }

  deleteBookList(url: string): Observable<any> {
    return this.httpClient.delete(this.baseUrl + url);
  }

  getBookListByid(url: string): Observable<any> {
    return this.httpClient.get(this.baseUrl + url);
  }

  updateBookList(url: string,data: any): Observable<any> {
    return this.httpClient.put(this.baseUrl + url, data);
  }

  addReviewList(url: string, data: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + url, data);
  }

  getReviewList(url: string): Observable<any> {
    return this.httpClient.get(this.baseUrl + url);
  }

  getReviewListByid(url: string): Observable<any> {
    return this.httpClient.get(this.baseUrl + url);
  }

  updateReviewList(url: string,data: any): Observable<any> {
    return this.httpClient.put(this.baseUrl + url, data);
  }

  deleteReview(url: string): Observable<any> {
    return this.httpClient.delete(this.baseUrl + url);
  }

}
