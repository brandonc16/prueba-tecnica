import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ViewUsersComponent } from './modules/view-users/view-users.component';
import { LayoutComponent } from './layout/layout.component';
import { UserDetailsComponent } from './modules/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LayoutComponent,
    ViewUsersComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
   FormsModule,
    AppRoutingModule,
    MaterialModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
