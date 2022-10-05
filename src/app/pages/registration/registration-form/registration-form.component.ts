import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationQuery } from '../../../models/registration.model';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {
  @Input()
  description?: string;

  @Output()
  submitFormEvent = new EventEmitter<RegistrationQuery>();

  registrationForm?: FormGroup;
  countries = [
    {
      value: 'LV',
      title: 'Latvia',
    },
    {
      value: 'EST',
      title: 'Estonia',
    },
    {
      value: 'LT',
      title: 'Lithuania',
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      surname: '',
      password: [
        '',
        Validators.pattern(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        ),
      ],
      country: 'LT',
      newsletter: true,
    });
  }

  submitForm(): void {
    this.registrationForm?.markAllAsTouched();

    if (this.registrationForm?.valid) {
      this.submitFormEvent.emit(this.registrationForm.value);
    }
  }
}
