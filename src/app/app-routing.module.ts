import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD

import { HomeComponent } from './components/home/home.component';

import { NotFoundComponent } from './components/widgets/not-found/not-found.component';
import { SemesterTableComponent } from './components/semester-table/semester-table.component'
import { ExamTableComponent } from './components/exam-table/exam-table.component';
import { TimeTableComponent } from './components/time-table/time-table.component';

const routes: Routes = [
  { path :'' , component: HomeComponent},
  {
    path: 'semesterTable',
    component: SemesterTableComponent
  },
  {
    path: 'examTable',
    component: ExamTableComponent
  },
  {
    path: 'timeTable',
    component: TimeTableComponent
  },
  
=======
import { GestionProfComponent } from './components/gestion/gestion-prof/gestion-prof.component';
import { AddNewProfComponent } from './components/add/add-new-prof/add-new-prof.component';
import { HomeComponent } from './components/home/home.component';
import { EditProfComponent } from './components/edit/edit-prof/edit-prof.component';
import { NotFoundComponent } from './components/widgets/not-found/not-found.component';
import { EditProfileComponent } from './components/edit/edit-profile/edit-profile.component';

import { LoginComponent } from './components/widgets/login/login.component';
import { SignupComponent } from './components/widgets/signup/signup.component';
import { AddNewAdminComponent } from './components/add/add-new-admin/add-new-admin.component';
import { GestionAdminComponent } from './components/gestion/gestion-admin/gestion-admin.component';
import { EditAdminComponent } from './components/edit/edit-admin/edit-admin.component';
import { GestionProgramComponent } from './components/gestion/gestion-program/gestion-program.component';
import { AddNewProgramComponent } from './components/add/add-new-program/add-new-program.component';
import { EditProgramComponent } from './components/edit/edit-program/edit-program.component';
import { GestionClassComponent } from './components/gestion/gestion-class/gestion-class.component';
import { AddNewClassComponent } from './components/add/add-new-class/add-new-class.component';
import { EditClassComponent } from './components/edit/edit-class/edit-class.component';
import { GestionModuleComponent } from './components/gestion/gestion-module/gestion-module.component';
import { AddNewModuleComponent } from './components/add/add-new-module/add-new-module.component';

const routes: Routes = [
  { path :'' , component: HomeComponent},
  { path :'signUp' , component: SignupComponent},
    { path :'home' , component: HomeComponent},
    { path :'profs' , component: GestionProfComponent},
    { path :'profs/add' , component: AddNewProfComponent},
    { path :'admins' , component: GestionAdminComponent},
    { path :'admins/add' , component: AddNewAdminComponent},
    { path :'admins/edit' , component: EditAdminComponent},
    { path :'programs' , component: GestionProgramComponent},
    { path :'programs/add' , component: AddNewProgramComponent},
    { path :'programs/edit' , component: EditProgramComponent},
    { path :'profs/edit',component:EditProfComponent},
    { path :'classes' , component: GestionClassComponent},
    { path :'classes/add' , component: AddNewClassComponent},
    { path :'classes/edit' , component: EditClassComponent},
    { path :'modules' , component: GestionModuleComponent},
    { path :'modules/add' , component: AddNewModuleComponent},

    { path :'profile/edit' , component: EditProfileComponent},

>>>>>>> source-repo/main
    // not-found
    { path :'**' , component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
