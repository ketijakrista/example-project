import { Component } from '@angular/core';
import { RegistrationQuery } from '../../models/registration.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  description = 'Please, fill all the fields';

  submitForm(query: RegistrationQuery): void {
    console.log('Esam te', query);
  }
}
