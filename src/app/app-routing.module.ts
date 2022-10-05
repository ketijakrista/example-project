import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlannerComponent } from './pages/planner/planner.component';
import { RegistrationComponent } from './pages/registration/registration.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'planner',
  },
  {
    path: 'planner',
    component: PlannerComponent,
  },
  {
    path: 'register',
    component: RegistrationComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'planner',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
