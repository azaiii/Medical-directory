import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientsListComponent } from './components/patients-list/patients-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientsListComponent,
    PatientDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
