import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AccountTComponent } from './account-t/account-t.component';
import { DocumentsTComponent } from './documents-t/documents-t.component';
import { EventsTComponent } from './events-t/events-t.component';
import { MaintenanceTComponent } from './maintenance-t/maintenance-t.component';
import { DocumentsAComponent } from './documents-a/documents-a.component';
import { EventsAComponent } from './events-a/events-a.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    AccountTComponent,
    DocumentsTComponent,
    EventsTComponent,
    MaintenanceTComponent,
    DocumentsAComponent,
    EventsAComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
