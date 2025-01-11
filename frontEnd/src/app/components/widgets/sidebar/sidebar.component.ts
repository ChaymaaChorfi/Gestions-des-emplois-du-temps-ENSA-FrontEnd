import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';  // Import Router

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  active:number=0;
   sidebarItems:any[] = [];
   uncheckedNotificationsCount: number = 0; // Store the count here

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

  {
    link: "/demanderRattrapage",
    title: "Demande Rattrapage",
    icon: "fas fa-clipboard-list"
  },
  {
    link: "/changerSeance",
    title: "Changer séance",
    icon: "fas fa-clipboard-list"
  },

  {
    link: "/notificationsAdmin",
    title: "Notifications",
    icon: "fas fa-clipboard-list",
    markAsChecked: true  // Add a flag for marking as checked

  },

  {
    link: "/historiqueAdmin",
    title: "Historique",
    icon: "fas fa-clipboard-list"
  },

  {
    link: "/notificationsProfesseur",
    title: "Notifications",
    icon: "fas fa-clipboard-list",
    markAsChecked: true  // Add a flag for marking as checked

  },
  {
    link: "/notificationsEtudiant",
    title: "Notifications",
    icon: "fas fa-clipboard-list",
    markAsChecked: true  // Add a flag for marking as checked

  },
]
constructor(
  private cookieService: CookieService,
  private http: HttpClient,
  private router: Router // Inject Router
) { }

ngOnInit(): void {
  if (this.cookieService.get('role') === "Administrateur") {
    this.sidebarItems = this.sidebarAdminItems;
  } else {
    this.sidebarItems = this.sidebarProfItems;
  }
  this.getUncheckedNotificationsCount();
}

handleChangeBars(index: number): void {
  this.active = index;
}

getUncheckedNotificationsCount(): void {
  const user_id = 3;
  const apiUrl = `http://localhost:1000/api/requests/notifications/unchecked-count/${user_id}`;
  this.http.get<{ uncheckedCount: number }>(apiUrl).subscribe(
    (response) => {
      this.uncheckedNotificationsCount = response.uncheckedCount;
    },
    (error) => {
      console.error('Error fetching unchecked notifications count:', error);
    }
  );
}

markAllAsChecked(): void {
  const user_id = 3;
  const apiUrl = `http://localhost:1000/api/requests/notifications/mark-all-checked/${user_id}`;
  this.http.put(apiUrl, {}).subscribe(
    () => {
      this.uncheckedNotificationsCount = 0;  // Reset the count after marking all as checked
    },
    (error) => {
      console.error('Error marking all notifications as checked:', error);
    }
  );
}

onMenuItemClick(link: string): void {
  // If the clicked item is the Notifications link, mark all as checked
  if (link === '/notificationsAdmin') {
    this.markAllAsChecked();
  }
  if (link === '/notificationsProfesseur') {
    this.markAllAsChecked();
  }
  if (link === '/notificationsEtudiant') {
    this.markAllAsChecked();
  }
  // After marking as checked, navigate to the link
  this.router.navigate([link]);
}
}