import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccountTComponent } from './account-t/account-t.component';
import { DocumentsTComponent } from './documents-t/documents-t.component';
import { EventsTComponent } from './events-t/events-t.component';
import { MaintenanceTComponent } from './maintenance-t/maintenance-t.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'userProfile', component:UserProfileComponent},
  {path:'documents', component:DocumentsTComponent},
  {path:'events', component:EventsTComponent},
  {path:'tickets', component:MaintenanceTComponent},
  {path:'**', component:PageNotFoundComponent} //make sure this path stays at the end of the arayy
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
