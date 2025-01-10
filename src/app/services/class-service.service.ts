import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";
import { PageClasse } from '../models/page.models';


@Injectable({
  providedIn: 'root'
})
export class ClassServiceService {
  constructor(private http:HttpClient) { }
  public getClasses(page: number, size: number): Observable<PageClasse> {
      return this.http.get<PageClasse>(environment.backendHost + "/class?page=" + page + "&size=" + size);
  }
}
