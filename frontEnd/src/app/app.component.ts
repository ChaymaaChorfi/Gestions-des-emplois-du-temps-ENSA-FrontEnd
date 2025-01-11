import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotificationsHeaderComponent } from './notifications-header/notifications-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NotificationsHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-frontend';
}
