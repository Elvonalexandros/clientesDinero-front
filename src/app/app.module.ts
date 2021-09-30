import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemsComponent } from './components/items/items.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GeneralSumarizeComponent } from './components/general-sumarize/general-sumarize.component';
import { NewPatientComponent } from './components/new-patient/new-patient.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { BalanceComponent } from './components/balance/balance.component';
import { RouterModule, Routes } from '@angular/router';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
const  routes: Routes = [
  {path: '', component: GeneralSumarizeComponent, pathMatch: 'full'},
  {path: 'general', component: GeneralSumarizeComponent},
  {path: 'newPatient', component: NewPatientComponent},
  {path: 'patientList', component: PatientListComponent},
  {path: 'balance', component: BalanceComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'},
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemsComponent,
    GeneralSumarizeComponent,
    NewPatientComponent,
    PatientListComponent,
    BalanceComponent,
    DatepickerComponent
  ],
  imports: [
    FormsModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
