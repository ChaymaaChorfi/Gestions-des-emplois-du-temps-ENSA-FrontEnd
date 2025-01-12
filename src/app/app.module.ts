import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { RequestFormComponent } from './request-form/request-form.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule], // Add HttpClientModule here
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
=======
=======
>>>>>>> source-repo/main

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/dashboard/app.component';
import { SidebarComponent } from './components/widgets/sidebar/sidebar.component';
import { NavbarComponent } from './components/widgets/navbar/navbar.component';
import { FooterComponent } from './components/widgets/footer/footer.component';
<<<<<<< HEAD
//import { PageHeaderComponent } from './components/widgets/page-header/page-header.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NotFoundComponent } from './components/widgets/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
=======
import { PageHeaderComponent } from './components/widgets/page-header/page-header.component';
import { StatistiqueComponent } from './components/widgets/statistique/statistique.component';
import { AddNewProfComponent } from './components/add/add-new-prof/add-new-prof.component';
import { AddNewAdminComponent } from './components/add/add-new-admin/add-new-admin.component';
import { GestionProfComponent } from './components/gestion/gestion-prof/gestion-prof.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditProfComponent } from './components/edit/edit-prof/edit-prof.component';
import { NotFoundComponent } from './components/widgets/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActionsComponent } from './components/dashboard/actions/actions.component';
import { LoginComponent } from './components/widgets/login/login.component';
import { SignupComponent } from './components/widgets/signup/signup.component';

import { ProfileComponent } from './components/widgets/profile/profile.component';
import { EditProfileComponent } from './components/edit/edit-profile/edit-profile.component';

import { MatSelectModule } from '@angular/material/select';  
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { GestionAdminComponent } from './components/gestion/gestion-admin/gestion-admin.component';
import { EditAdminComponent } from './components/edit/edit-admin/edit-admin.component';
import { AddNewProgramComponent } from './components/add/add-new-program/add-new-program.component';
import { EditProgramComponent } from './components/edit/edit-program/edit-program.component';
import { GestionProgramComponent } from './components/gestion/gestion-program/gestion-program.component';
import { GestionClassComponent } from './components/gestion/gestion-class/gestion-class.component';
import { EditClassComponent } from './components/edit/edit-class/edit-class.component';
import { AddNewClassComponent } from './components/add/add-new-class/add-new-class.component';
import { GestionModuleComponent } from './components/gestion/gestion-module/gestion-module.component';
import { AddNewModuleComponent } from './components/add/add-new-module/add-new-module.component';
>>>>>>> source-repo/main


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
<<<<<<< HEAD
    //PageHeaderComponent,
   
    NotFoundComponent,
   
    
    
=======
    PageHeaderComponent,
    StatistiqueComponent,
    ActionsComponent,
    AddNewProfComponent,
    AddNewAdminComponent,
    GestionProfComponent,
    GestionAdminComponent,
    HomeComponent,
    GestionProgramComponent,
    AddNewProgramComponent,
    EditProfComponent,
    EditAdminComponent,
    NotFoundComponent,
    ActionsComponent,
    EditProgramComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    EditProfileComponent,
    GestionClassComponent,
    EditClassComponent,
    AddNewClassComponent,
    GestionModuleComponent,
    AddNewModuleComponent,

>>>>>>> source-repo/main
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
>>>>>>> wiam/wiam
=======
    MatSelectModule,  
    MatFormFieldModule,
    FormsModule,
    MatChipsModule,
    MatIconModule,
    MatInputModule,
     
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
>>>>>>> source-repo/main
