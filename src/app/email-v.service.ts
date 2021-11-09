import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailVService {
  public Base_url = "https://emailvalidation.abstractapi.com/v1/";
  public Api_key = "a638ac2eedbb40daa4dbd91b85cf00db";
  constructor(private http: HttpClient) { }
  getEmailValiData(email: string): Observable<any> {
    return this.http.get<any>(`${this.Base_url}?api_key=${this.Api_key}&email=${email}`);
  }
}

