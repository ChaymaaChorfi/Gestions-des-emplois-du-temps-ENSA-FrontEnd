<<<<<<< HEAD
//import { Prof } from './../../models/prof.models';
=======
>>>>>>> source-repo/main
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

<<<<<<< HEAD
 // prof!: boolean;

  constructor() {
  }
  ngOnInit() {
   // this.prof = (this.cookieService.get('role') == 'Ensignant')? true : false; 
=======
  prof!: boolean;

  constructor(private cookieService: CookieService) {
  }
  ngOnInit() {
    this.prof = (this.cookieService.get('role') == 'PROF')? true : false; 
>>>>>>> source-repo/main

  }
}