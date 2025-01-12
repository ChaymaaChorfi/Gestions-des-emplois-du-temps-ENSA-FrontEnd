import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
//import { CookieService } from 'ngx-cookie-service';
//import { AuthService } from 'src/app/services/auth.service';
=======
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';
>>>>>>> source-repo/main

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public username: string = "";
  public userId: number = 0;
  public role: string = "";
<<<<<<< HEAD
 // constructor(private cookieService: CookieService,private authService: AuthService,private router:Router) {}
 constructor(private router:Router) {}

ngOnInit() {
  // this.username = this.cookieService.get('username');
   // this.userId = +this.cookieService.get('userId');
   // this.role = this.cookieService.get('role');
=======
  constructor(private cookieService: CookieService,private authService: AuthService,private router:Router) {}

ngOnInit() {
   this.username = this.cookieService.get('username');
    this.userId = +this.cookieService.get('userId');
    this.role = this.cookieService.get('role');
>>>>>>> source-repo/main
  // Use the stored values as needed
}

handleLogout(){
<<<<<<< HEAD
//  this.cookieService.delete('role');

 /* this.authService.logout(this.userId).subscribe(response => {
=======
  this.cookieService.delete('role');

  this.authService.logout(this.userId).subscribe(response => {
>>>>>>> source-repo/main
        this.authService.loggedIn = false;
          this.authService.isAdmin = false;
          this.authService.isProf = false;
          this.authService.name = "";
          this.authService.token = "";
          this.authService.id = 0;
          // refresh page
          // vhange route 
<<<<<<< HEAD
          this.router.navigateByUrl('/home');
          window.location.reload();
      }
      )*/
=======
          this.router.navigateByUrl('/');
          window.location.reload();
      }
      )
>>>>>>> source-repo/main
      
}
}
