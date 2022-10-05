import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlannerComponent } from './pages/planner/planner.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { RegistrationFormComponent } from './pages/registration/registration-form/registration-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PlannerComponent,
    HeaderComponent,
    RegistrationComponent,
    RegistrationFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
