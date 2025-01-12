import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
<<<<<<< HEAD
export class SidebarComponent {
  active: number = 0;
  sidebarItems: any[] = [];

  sidebarAdminItems = [
    {
      link: '',
      title: 'Home',
      icon: 'fas fa-home'
    },
    {
      link: 'timeTable',
      title: 'Emploi du temps',
      icon: 'fas fa-clock'
    },
    {
      link: 'semesterTable',
      title: 'Calendrier de Semestre',
      icon: 'fas fa-solid fa-calendar-days'
    },
    {
      link: 'examTable',
      title: 'Calendrier des Examens',
      icon: 'fas fa-regular fa-calendar-check'
    }
  ];

  constructor() {}

  handleChangeBars(index: number): void {
    this.active = index;
  }

  ngOnInit(): void {
    this.sidebarItems = this.sidebarAdminItems;
  }
=======
export class SidebarComponent implements OnInit{
  active:number=0;
   sidebarItems:any[] = [];

  sidebarAdminItems = [
  {
    link: "/home",
    title: "Home",
    icon: "fas fa-home"
  },
  {
    link: "/emploitemps",
    title: "Emploi du temps",
    icon: "fas fa-clipboard-list"
  },
  {
    link: "/classes",
    title: "Classes",
    icon: "fas fa-graduation-cap"
  },
  {
    link: "/profs",
    title: "Professeurs",
    icon: "fas fa-chalkboard-teacher"
  },
  {
    link: "/departements",
    title: "Départments",
    icon: "fas fa-building"
  },
  {
    link: "/filieres",
    title: "Filières",
    icon: "fas fa-book-reader"
  },
  {
    link: "/salles",
    title: "Salles",
    icon: "fas fa-clipboard"
  }
];

sidebarProfItems = [
  {
    link: "/home",
    title: "Home",
    icon: "fas fa-home"
  },
  {
    link: "/emploitemps",
    title: "Emploi du temps",
    icon: "fas fa-clipboard-list"
  },
  {
    link: "/nonDesponibles",
    title: "Non Disponibilités",
    icon: "fas fa-clipboard-list"
  },

]
  constructor(private cookieService: CookieService) { }

  handleChangeBars(index: number): void {
  this.active = index;
}
  ngOnInit(): void {

    if(this.cookieService.get('role') == "Administrateur"){
     this.sidebarItems= this.sidebarAdminItems;
    }else {
     this.sidebarItems= this.sidebarProfItems;
    }

}
>>>>>>> source-repo/main
}