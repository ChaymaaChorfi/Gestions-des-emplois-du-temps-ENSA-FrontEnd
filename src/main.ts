<<<<<<< HEAD
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // Import your routes
import { provideHttpClient, withFetch } from '@angular/common/http'; // Import provideHttpClient and withFetch

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Provide routing for the app
    provideHttpClient(withFetch()), // Enable fetch for HttpClient
  ],
}).catch((err) => console.error(err));

=======
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
>>>>>>> wiam/wiam
