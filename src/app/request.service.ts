import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  private apiUrl = 'http://localhost:1000/api/requests'; // Replace with your backend endpoint

  constructor(private http: HttpClient) {}

  createRequest(requestData: any): Observable<any> {
    return this.http.post(this.apiUrl, requestData);
  }
}
