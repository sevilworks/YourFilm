import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErreurComponent } from './erreur/erreur.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    ErreurComponent,
    EmployeeDashboardComponent,
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
